import "./styles.css";
import addListImage from "../images/add-button.png";

const listsWindow = document.querySelector(".lists-window");

const addListBtn = document.querySelector("#addListBtn");
addListBtn.src = addListImage;
addListBtn.parentElement.style.border = "none";

addListBtn.addEventListener("click", addList);

function addList() {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  listContainer.classList.add("scrollable");

  const listTitle = document.createElement("h4");
  listTitle.classList.add("list-title");
  listTitle.innerText = "Temp";

  const list = document.createElement("ul");
  list.classList.add("list");

  listContainer.appendChild(listTitle);
  listContainer.appendChild(list);

  listsWindow.appendChild(listContainer);
  listsWindow.appendChild(addListBtn.parentElement);
}
