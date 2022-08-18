export default function addMenu() {
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

  return table;
}
