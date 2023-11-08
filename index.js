const name = document.getElementById ('name')
const number = document.getElementById('number');
const email = document.getElementById('email');
const btn = document.getElementById ( 'btn');


function list() {
                    
 table = document.createElement("table");
table.className = "myTable";
 row = table.insertRow(0);
for ( j = 0; j < 3; j++) {
   cell = row.insertCell(j);
//   cell.innerHTML = name.value;
  cell.innerHTML = number.value;
//   cell.innerHTML = age.value;
}
document.body.appendChild(table);
}
btn.addEventListener ('click', function () {
    list ()
})