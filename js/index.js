const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;
let tasksUl;

function addTask() {
    const reminderList = document.getElementById("reminder-list");
    let hour;
    while (!regex.test(hour)) {
        hour = prompt("Digite a hora escolhida! (hh:mm)");
    }
    const message = prompt("Digite sua mensagem: ");
    document.getElementById("hidden").style.display = "none";
    reminderList.appendChild(createLi(hour, message));
}
function createLi(hour, message) {
    const createItem = document.createElement("li");
    createItem.classList.add("reminder-item");
    createItem.classList.add(
        `date-${date.getFullYear()}${date.getMonth()}-${hour}`
    );
    createItem.innerHTML = `
  <div>${message}</div>
  <div>${hour}</div>
 `;
    createItem.classList;
    return createItem;
}

const date = new Date();

function updateDate() {
    document.getElementById("display-date").innerHTML = date.toLocaleDateString(
        "pt-BR",
        { month: "short", year: "numeric" }
    );

    tasksUl = document.querySelectorAll("#reminder-list li");
    for (let t = 0; t < tasksUl.length; t++) {
        if (
            tasksUl[t].classList.contains(
                `date-${date.getFullYear()}${date.getMonth()}`
            )
        ) {
            document.getElementById("hidden").style.display = "none";
            tasksUl[t].style.display = "flex";
        } else {
            tasksUl[t].style.display = "none";
            document.getElementById("hidden").style.display = "block";
        }
    }
}

updateDate();
ordenaPorHora();
function addMonthInDate() {
    date.setMonth(date.getMonth() + 1);
    updateDate();
}

function minusMonthInDate() {
    date.setMonth(date.getMonth() - 1);
    updateDate();
}

function ordenaPorHora() {
    const taskList = document.querySelectorAll("#reminder-list li");

    for (let i = 0; i < taskList.length; i++) {
        console.log(tasksUl[0].classList);
    }
    console.log(taskList);
}
