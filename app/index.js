const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const table = document.createElement("table");
table.className = "myTable";
document.body.appendChild(table);

function list() {
    table.innerHTML = ""; // Yangi qatorlarni qo'shishdan oldin jadvalni tozalash
    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    for (let i = 0; i < users.length; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < 3; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = users[i][j];
        }
    }
}

btn.addEventListener('click', function () {
    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    if (name.value && age.value && email.value) {
        let newUser = [name.value, age.value, email.value];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        list();
    }
});