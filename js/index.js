const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;
let tasksUl;
let taskData = [];
const reminderList = document.getElementById("reminder-list");

function addTask() {
    let hour;
    while (!regex.test(hour)) {
        hour = prompt("Digite a hora escolhida! (hh:mm)");
    }
    const message = prompt("Digite sua mensagem: ");
    // document.getElementById("hidden").style.display = "none";

    const newTask = {
        month: `${date.getFullYear()}${date.getMonth()}`,
        hour: hour,
        message: message,
    };

    taskData.push(newTask);

    createLi(
        taskData.sort((a, b) => {
            const aHour = a.hour;
            const bHour = b.hour;

            const formatedA = aHour.replace(":", "").trim();
            const formatedB = bHour.replace(":", "").trim();

            return formatedB - formatedA;
        })
    );
}

function createLi(results) {
    let i = 0;
    console.log(results);
    clearList();
    if (taskData.length === 0) {
        console.log(`nenhum`);
    } else {
        for (const task of results) {
            const createItem = document.createElement("li");
            createItem.classList.add("reminder-item");
            createItem.classList.add(
                `date-${date.getFullYear()}${date.getMonth()}`
            );
            createItem.innerHTML = `
            <div>${results[i].message}</div>
            <div>${results[i].hour}</div>
            `;

            reminderList.appendChild(createItem);
            i++;
        }
    }
}

function clearList() {
    while (reminderList.firstChild) {
        reminderList.removeChild(reminderList.firstChild);
    }
}

const date = new Date();

function updateDate() {
    document.getElementById("display-date").innerHTML = date.toLocaleDateString(
        "pt-BR",
        { month: "short", year: "numeric" }
    );

    if (taskData.length > 0) {
        createLi(
            taskData
                .sort((a, b) => {
                    const aHour = a.hour;
                    const bHour = b.hour;

                    const formatedA = aHour.replace(":", "").trim();
                    const formatedB = bHour.replace(":", "").trim();

                    return formatedB - formatedA;
                })
                .filter((task) => {
                    console.log(task);
                    console.log(`${date.getFullYear} ${date.getMonth()}`);
                })
        );
    }

    // document.getElementById("hidden").style.display = "block";

    // tasksUl = document.querySelectorAll("#reminder-list li");
    // for (let t = 0; t < tasksUl.length; t++) {
    //     if (
    //         tasksUl[t].classList.contains(
    //             `date-${date.getFullYear()}${date.getMonth()}`
    //         )
    //     ) {
    //         console.log(`apagou`);
    //         document.getElementById("hidden").style.display = "none";
    //         tasksUl[t].style.display = "flex";
    //     } else {
    //         tasksUl[t].style.display = "none";
    //     }
    // }
}

updateDate();

function addMonthInDate() {
    date.setMonth(date.getMonth() + 1);
    updateDate();
}

function minusMonthInDate() {
    date.setMonth(date.getMonth() - 1);
    updateDate();
}

// function ordenaPorHora() {
//     const taskList = document.querySelectorAll("#reminder-list li");

//     for (let i = 0; i < taskList.length; i++) {
//         console.log(tasksUl[0].classList);
//     }
//     console.log(taskList);
// }
