import "./styles.css";
import addListImage from "../images/add-button.png";
import deleteImage from "../images/delete-button.png";

function List() {
  this.title = "Temp";
  this.items = [];
}

function Task(text, dueDate, priority) {
  this.text = text;
  this.dueDate = dueDate;
  this.priority = priority;
  this.isChecked = false;
}

const listsWindow = document.querySelector(".lists-window");

let lists = localStorage.getItem("lists");
if (lists == null) lists = [];
else lists = JSON.parse(lists);

const form = document.querySelector("form");
const formListOptions = form.querySelector("#list-groups");
updateListOptions();
form.onsubmit = addTask;

const addListBtn = (() => {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  listContainer.classList.add("add-list-div");

  const addListBtn = document.createElement("img");
  addListBtn.id = "addListBtn";
  addListBtn.src = addListImage;
  listContainer.appendChild(addListBtn);
  addListBtn.parentElement.style.border = "none";
  addListBtn.addEventListener("click", () => {
    const newList = new List();
    lists.push(newList);
    addListContainer(newList);
  });

  return listContainer;
})();

updateLists();

function updateLists() {
  listsWindow.innerHTML = "";
  lists.forEach((list) => {
    addListContainer(list);
  });
  const listContainers = document.querySelectorAll(".list-container");

  listContainers.forEach((container) => {
    const listTitle = container.querySelector(".list-title");

    if (listTitle == null) return;

    const list = lists.find((list) => list.title == listTitle.value);
    const ul = container.querySelector(".list");
    ul.innerHTML = "";

    list.items.forEach((task) => {
      const li = document.createElement("li");
      li.classList.add("list-item");
      li.classList.add(task.priority);
      li.innerText = task.text;
      ul.appendChild(li);
      addCheckbox(listTitle.value, li);
      addDeleteBtn(listTitle.value, li);
    });
  });

  listsWindow.appendChild(addListBtn);

  localStorage.setItem("lists", JSON.stringify(lists));
}

function addTask() {
  event.preventDefault();

  let listName = form.querySelector("#list-groups").value;
  const list = lists.find((list) => list.title == listName);
  console.log(list);

  let text = form.querySelector("#task-name").value;
  let dueDate = form.querySelector("#reminder-date").value;
  let priority = form.querySelector("#priority-list").value + "-priority";
  const task = new Task(text, dueDate, priority);

  list.items.push(task);
  updateLists();
}

function addCheckbox(listTitle, listItem) {
  const checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.style.width = "10px";
  checkButton.style.height = "10px";
  checkButton.style.backgroundColor = "white";
  checkButton.style.borderRadius = "10px";

  checkButton.onclick = () => {
    listItem.style.textDecoration = checkButton.checked
      ? "line-through"
      : "none";
  };

  listItem.prepend(checkButton);
}

function addDeleteBtn(listTitle, listItem) {
  const deleteBtn = document.createElement("img");
  deleteBtn.src = deleteImage;
  deleteBtn.style.width = "1rem";
  deleteBtn.style.float = "right";
  deleteBtn.classList.add("delete-button");
  deleteBtn.addEventListener("click", () => {
    let list = lists.find((list) => list.title == listTitle);
    console.log(list);
    listItem.parentNode.removeChild(listItem);
    list.items = list.items.filter((item) => item.text != listItem.innerText);
    updateLists();
  });
  listItem.appendChild(deleteBtn);
}

function addListContainer(newList) {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  listContainer.classList.add("scrollable");

  const deleteButton = document.createElement("img");
  deleteButton.src = deleteImage;
  deleteButton.style.width = "2vh";
  deleteButton.style.cursor = "pointer";
  deleteButton.classList.add("top-right");
  deleteButton.classList.add("delete-button");

  listContainer.addEventListener("mouseenter", () => {
    deleteButton.style.display = "inline-block";
  });
  listContainer.addEventListener("mouseleave", () => {
    deleteButton.style.display = "none";
  });

  const listTitle = document.createElement("input");
  listTitle.type = "text";
  listTitle.classList.add("list-title");
  listTitle.value = newList.title;
  listTitle.setAttribute("autofocus", "autofocus");
  listTitle.onchange = () => {
    if (listTitle.value == "") {
      listTitle.value = newList.title;
      alert("List must have a name!");
      return;
    }
    newList.title = listTitle.value;
    updateListOptions();
  };

  const list = document.createElement("ul");
  list.classList.add("list");

  deleteButton.addEventListener("click", () => {
    listsWindow.removeChild(listContainer);
    lists = lists.filter((list) => list != newList);
    updateListOptions();
  });

  listContainer.appendChild(listTitle);
  listContainer.appendChild(deleteButton);
  listContainer.appendChild(list);

  listsWindow.appendChild(listContainer);
  listsWindow.appendChild(addListBtn);
  listTitle.focus();
  updateListOptions();
}

function updateListOptions() {
  formListOptions.innerHTML = "";
  lists.forEach((list) => {
    let option = document.createElement("option");
    option.value = list.title;
    option.innerText = list.title;
    formListOptions.append(option);
  });
}
