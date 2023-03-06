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

    const newTask = {
        month: `${date.getFullYear()}${date.getMonth()}`,
        hour: hour,
        message: message,
    };

    taskData.push(newTask);

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
                const currentDate = `${date.getFullYear()}${date.getMonth()}`;
                console.log(task.month);
                console.log(currentDate);
                return task.month == currentDate;
            })
    );
}

function createLi(results) {
    let i = 0;
    console.log(results);

    if (results.length === 0) {
        clearList();
        const hiddenElement = document.createElement("li");
        hiddenElement.innerHTML = `<li id="hidden" class="reminder-item">
        <div>Nenhum lembrete cadastrado ainda</div>
    </li>`;

        reminderList.appendChild(hiddenElement);
        document.getElementById("hidden").style.display = "flex";
    } else {
        clearList();
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
}

updateDate();

function addMonthInDate() {
    date.setMonth(date.getMonth() + 1);
    updateDate();
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
                const currentDate = `${date.getFullYear()}${date.getMonth()}`;
                console.log(task.month);
                console.log(currentDate);
                return task.month == currentDate;
            })
    );
}

function minusMonthInDate() {
    date.setMonth(date.getMonth() - 1);
    updateDate();
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
                const currentDate = `${date.getFullYear()}${date.getMonth()}`;
                console.log(task.month);
                console.log(currentDate);
                return task.month == currentDate;
            })
    );
}
