export default function addContact() {
  const content = document.querySelector("#content");
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

  return openHours;
}
