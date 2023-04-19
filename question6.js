// 6.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och talet 1 till 10.
// Så här: <button class="primary">1</button> <button class="primary">2</button> ...
// Koden kan använda en for-loop

const classNames = ["primary", "secondary"]

function buttonLoop() {
  for (let index = 0; index < 10; index++) {
    let button = document.createElement("button")
    let id = index + 1
    button.innerText = id
    button.id = id
    button.className = "primary"
    button.addEventListener('click', function(e) {
      e.target.className === "primary" ? e.target.className = "secondary" : e.target.className = "primary"
    })
    document.body.appendChild(button)
  }
}

buttonLoop();
// 6.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"
