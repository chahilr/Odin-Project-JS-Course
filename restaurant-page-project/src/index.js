import RestaurantImg from "./../images/restaurant.jpeg";
import "./styles.css";

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

  if (title == "About") {
    const p = document.createElement("p");
    p.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        necessitatibus pariatur minus quaerat vitae libero facere, neque sunt
        ipsam non quibusdam quia veniam fugit, laboriosam saepe doloribus quae
        officia nesciunt.`;
    content.appendChild(p);
  } else if (title == "Menu") {
    const table = document.createElement("table");
    const header1 = document.createElement("th");
    const header2 = document.createElement("th");
    header1.innerText = "Item";
    header2.innerText = "Price";

    table.appendChild(header1);
    table.appendChild(header2);

    let row = document.createElement("tr");
    let item = document.createElement("td");
    let price = document.createElement("td");

    item.innerText = "Fish and Chips";
    price.innerText = "$10.99";
    row.appendChild(item);
    row.appendChild(price);
    table.appendChild(row);

    row = document.createElement("tr");
    item = document.createElement("td");
    price = document.createElement("td");

    item.innerText = "Pasta";
    price.innerText = "$9.99";
    row.appendChild(item);
    row.appendChild(price);
    table.appendChild(row);

    row = document.createElement("tr");
    item = document.createElement("td");
    price = document.createElement("td");

    item.innerText = "Steak";
    price.innerText = "$14.99";
    row.appendChild(item);
    row.appendChild(price);
    table.appendChild(row);
    table.style.width = "100%";

    content.appendChild(table);
  } else if (title == "Contact Us") {
    const p = document.createElement("p");
    p.innerText = `Call at 123-456-7890
    Email at abc@def.com`;
    content.appendChild(p);

    const scheduleTitle = document.createElement("h3");
    scheduleTitle.innerText = "Open Hours";
    content.appendChild(scheduleTitle);

    const openHours = document.createElement("table");
    openHours.id = "schedule";
    const dayHeader = document.createElement("th");
    dayHeader.innerText = "Day";
    const hoursHeader = document.createElement("th");
    hoursHeader.innerText = "Hours";
    openHours.appendChild(dayHeader);
    openHours.appendChild(hoursHeader);

    const schedule = {
      sunday: "Closed",
      monday: "8am - 8pm",
      tuesday: "8am - 8pm",
      wednesday: "8am - 8pm",
      thursday: "8am - 8pm",
      friday: "9am - 5pm",
      saturday: "Closed",
    };

    for (let day in schedule) {
      let row = document.createElement("tr");
      let dayTitle = document.createElement("td");
      let hours = document.createElement("td");

      dayTitle.innerText = day.toLocaleUpperCase();
      hours.innerText = schedule[day];
      row.appendChild(dayTitle);
      row.appendChild(hours);
      openHours.appendChild(row);
    }

    content.appendChild(openHours);
  }

  return content;
}

const body = document.body;
body.appendChild(addTitle());
body.appendChild(addNav());
body.appendChild(addHeaderImage());
body.appendChild(addContent("About"));
