// 10 (3p) Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har ett
// id högre än 20 och lägg i elementet todos.

const todos = document.querySelector("#todos");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const jsonData = await response.json();
  let arr = [];
  jsonData.forEach((el) => {
    if (el.id > 20) {
      arr.push(el.title);
    }
  });
  arr.forEach(el => {
    let span = document.createElement("span")
    span.innerText = el
    todos.appendChild(span)
    todos.appendChild(document.createElement("br"))
  })
}

getTodos();
