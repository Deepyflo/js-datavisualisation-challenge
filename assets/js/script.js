let table = document.getElementById("table2");
let allrows = table.rows.length;
console.log(table);
console.log(allrows);
let countryTab = [];
let youngTab = [];
let oldTab = [];
for (let i = 0; i < allrows; i++) {
    const element = table.rows[i].cells.item(1).innerText;
    countryTab[i] = element;
}
for (let i = 0; i < allrows; i++) {
    const element = table.rows[i].cells.item(2).innerText;
    youngTab[i] = parseInt(element);
}
for (let i = 0; i < allrows; i++) {
    const element = table.rows[i].cells.item(3).innerText;
    oldTab[i] = parseInt(element);
}
console.log(countryTab);
console.log(youngTab);
console.log(oldTab);

table.insertAdjacentHTML('beforebegin', '<canvas id="cvs2" width="400" height="200">Canvas not supported on your browser...</canves>');

let ctx = document.getElementById('cvs2');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2007-09', '2010-12'],
        datasets: [{
            label: countryTab,
            data: [youngTab, oldTab],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});