let randomColor = () => {
    return Math.floor(Math.random() * 255);
}

let table = document.getElementById("table2");
let allrows = table.rows.length;
console.log(table);
console.log(allrows);
let countryTab = [];
let youngTab = [];
let oldTab = [];
for (let i = 1; i < allrows; i++) {
    const element = table.rows[i].cells.item(1).innerText;
    countryTab[i - 1] = element;
}
for (let i = 1; i < allrows; i++) {
    const element = table.rows[i].cells.item(2).innerText;
    youngTab[i - 1] = parseInt(element);
}
for (let i = 1; i < allrows; i++) {
    const element = table.rows[i].cells.item(3).innerText;
    oldTab[i - 1] = parseInt(element);
}
console.log(countryTab);
console.log(youngTab);
console.log(oldTab);

table.insertAdjacentHTML('beforebegin', '<canvas id="cvs2" width="400" height="200">Canvas not supported on your browser...</canvas>');

let ctx = document.getElementById('cvs2');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2007-09', '2010-12'],
        datasets: [{
            label: [],
            data: [],
            backgroundColor: [],
            borderWidth: 1,
            borderColor: [
                `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        elements: {
            bar: {
                borderWidth: 1,
                borderColor: [
                    `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
                ]
            }
        }
    }
});
myChart.data.datasets.pop();
for (let i = 0; i < countryTab.length; i++) {
    let element = countryTab[i];
    
    myChart.data.datasets.push({label: element, data: [youngTab[i], oldTab[i]], backgroundColor: `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.5)`, borderColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`});
    myChart.update();
    // myChart.data.datasets.push({backgroundColor: [`rgba(${randomColor}, ${randomColor}, ${randomColor}, 0.2)`]});
}
// for (let i = 0; i < youngTab.length; i++) {
//     myChart.data.datasets.push({label: [], data: [youngTab[i], oldTab[i]]});
// }

