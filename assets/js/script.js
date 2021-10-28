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

let h1 = document.getElementById("firstHeading");
h1.insertAdjacentHTML('afterend', '<canvas id="cvsA" width="400" height="200">Canvas not supported on tour browser...</canvas>');

let ctx = document.getElementById('cvs2');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2007-09', '2010-12'],
        datasets: [{
            label: [],
            data: [],
            backgroundColor: []
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
}


let chartApi = async () => {
    let generateLabels = () => {
        let labels = [];

        for (let i = 0; i < data.length; i++) {
            labels.push(i.toString());
        }
            return labels;
    }
    let reloadData = async () => {
        response = await fetch('https://canvasjs.com/services/data/datapoints.php', {cache: "reload"});
        return await response.json();
    }
    let response = await fetch('https://canvasjs.com/services/data/datapoints.php', {cache: "reload"});
    let data = await response.json();
    let ctxB = document.getElementById("cvsA");
    let animChart = new Chart(ctxB, {
        type: 'line',
        data: {
            labels: generateLabels(),
            datasets: [{
                label: [],
                data: data,
                fill: true,
                borderColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
                tension: 0.5
            }]
        }
    })
    let i = 10;
    setInterval(async () => {
        animChart.data.labels.push(i);
        data = await reloadData();
        animChart.data.datasets[0].data.push(data[3]);
        // animChart.data.datasets[0].backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.5)`;
        // animChart.data.datasets[0].borderColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.5)`;
        animChart.update();
        i++;
    }, 1000);
    // animChart.data.labels = generateLabels();
    // animChart.data.datasets.push({label: "data", data: data, borderColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`});
    // animChart.update();
}
chartApi();
