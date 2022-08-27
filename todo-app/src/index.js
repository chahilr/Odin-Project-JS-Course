import "./styles.css";
import addListImage from "../images/add-button.png";

const listsWindow = document.querySelector(".lists-window");

const addListBtn = document.querySelector("#addListBtn");
addListBtn.src = addListImage;
addListBtn.parentElement.style.border = "none";

const listItems = document.querySelectorAll(".list > li");
listItems.forEach(addButton);

addListBtn.addEventListener("click", addList);

function addButton(listItem) {
  const checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.style.width = "10px";
  checkButton.style.height = "10px";
  checkButton.style.backgroundColor = "white";
  checkButton.style.borderRadius = "10px";

  checkButton.onclick = () =>
    (listItem.style.textDecoration = checkButton.checked
      ? "line-through"
      : "none");

  listItem.prepend(checkButton);
}

function addList() {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  listContainer.classList.add("scrollable");

  const listTitle = document.createElement("input");
  listTitle.type = "text";
  listTitle.classList.add("list-title");
  listTitle.value = "Temp";
  listTitle.setAttribute("autofocus", "autofocus");

  const list = document.createElement("ul");
  list.classList.add("list");

  listContainer.appendChild(listTitle);
  listContainer.appendChild(list);

  listsWindow.appendChild(listContainer);
  listsWindow.appendChild(addListBtn.parentElement);
  listTitle.focus();
}
