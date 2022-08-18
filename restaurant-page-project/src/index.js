import RestaurantImg from "./../images/restaurant.jpeg";
import "./styles.css";
import addAbout from "./about";
import addMenu from "./menu";
import addContact from "./contact";

function addHeaderImage() {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerImage = new Image();
  headerImage.src = RestaurantImg;
  headerImage.classList.add("header-img");
  headerImage.alt = "Picture of restaurant";
  headerImage.title = "Picture of restaurant";
  headerImage.width = "500";
  headerImage.id = "header-image";

  header.appendChild(headerImage);

  return header;
}

function addNav() {
  const nav = document.createElement("nav");
  nav.classList.add("main-nav");

  const ul = document.createElement("ul");
  const about = document.createElement("li");
  about.id = "about";
  about.innerText = "About";
  const menu = document.createElement("li");
  menu.id = "menu";
  menu.innerText = "Menu";
  const contact = document.createElement("li");
  contact.id = "contact";
  contact.innerText = "Contact Us";

  about.addEventListener("click", () => addContent("About"));
  menu.addEventListener("click", () => addContent("Menu"));
  contact.addEventListener("click", () => addContent("Contact Us"));

  ul.appendChild(about);
  ul.appendChild(menu);
  ul.appendChild(contact);

  nav.appendChild(ul);

  return nav;
}

function addTitle() {
  const title = document.createElement("h1");
  title.classList.add("main-title");
  title.innerText = "Lake House";

  return title;
}

function addContent(title) {
  const content =
    document.querySelector("#content") ?? document.createElement("div");
  content.innerHTML = "";
  content.id = "content";

  const contentTitle = document.createElement("h2");
  contentTitle.innerText = title;
  content.appendChild(contentTitle);

  switch (title) {
    case "About":
      content.appendChild(addAbout());
      break;
    case "Menu":
      content.appendChild(addMenu());
      break;
    case "Contact Us":
      content.appendChild(addContact());
      break;
  }

  return content;
}

const body = document.body;
body.appendChild(addTitle());
body.appendChild(addNav());
body.appendChild(addHeaderImage());
body.appendChild(addContent("About"));
