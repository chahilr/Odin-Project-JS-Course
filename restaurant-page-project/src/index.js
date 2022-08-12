import RestaurantImg from "./../images/restaurant.jpeg";
import "./styles.css";

function component() {
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

const content = document.querySelector("#content");
content.appendChild(component());
