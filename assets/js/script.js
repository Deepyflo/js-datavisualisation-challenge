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

//Syl work

/*==========| setup var|========== */
const table1        = document.getElementById('table1');
const reg           = new RegExp( /(\(.\))/g );
let dataObj         = {};
const tableOneDatas = [];

const canvas = document.createElement('canvas');
canvas.id = 'chartTableOne';
const divVoisin = document.getElementById('toc');
divVoisin.parentNode.insertBefore(canvas, divVoisin.nextSibling);


/*====================================================================================== */
/*=============================| récupération des donnés |================================ */

/* Je récupère chaque row du tableau 1 que je place dans un array inside un array*/
// help source: https://stackoverflow.com/a/68047870

const tableOneDatasBrut = [...table1.rows].map(row => [...row.cells].map(td => td.innerText));
tableOneDatasBrut.splice(0,2); /* supprime les 2 prmières row*/


/* surprime les caractères spéciaux: (²) */
tableOneDatasBrut.forEach(element => {
     element[1] = element[1].replace(reg, '');
})


/* Je récupère la row du tableau avec les dates et remplace les deux 1er éléments par id et country*/
let dataKeyTable1 = [...table1.rows[1].cells].map(el => el.innerText);
dataKeyTable1.splice(0,2, 'id','country');


/* création d'un tableau contenant chaque pays et leurs données en tant qu'objet */
tableOneDatasBrut.forEach(elem => {
    result =  Object.assign.apply({}, dataKeyTable1.map( (key, value) => ( {[key]: elem[value]} ) ) );
    tableOneDatas.push(result);
});
// help source: https://www.codegrepper.com/code-examples/javascript/javascript+combine+two+arrays+to+object



/*====================================================================================== */
/*=============================| Chart table 1 |================================ */

/*==========| setup var chart|========== */
let context      = document.getElementById('chartTableOne').getContext('2d');
const labels = tableOneDatas.map(elem => elem.country);

/*==========| setup colors|========== */
    const clrOne   = '255, 99, 132';
    const clrTwo   = '54, 162, 235';
    const clrThree = '255, 206, 86';
    const clrFour  = '75, 192, 192';
    const clrFive  = '153, 102, 255';
    const clrSix   = '255, 159, 64';

    const clrBgOpacity     = 0.2;
    const clrBorderOpacity = 1;

    const colors = [clrOne, clrTwo, clrThree, clrFour, clrFive, clrSix];
    const randomColor = () => colors[ Math.floor(Math.random() * colors.length)];

/*=============================| Le Chart table 1 |================================ */

let chartTableOne = new Chart(context, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: datasetsTable1(),
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Crimes recorded by the police'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            }
        }
    }
});

/*=============================| Function pour intégrer les datas |================================ */

function datasetsTable1 () {
    let datasets = [];
    for(i=2; i < dataKeyTable1.length; i++) {
        obj = { 
                label: dataKeyTable1[i],
                data: tableOneDatas.map(elem => parseInt(elem[dataKeyTable1[i]])),
                backgroundColor: `rgba(${randomColor()}, ${clrBgOpacity})`,
                borderColor:     `rgba(${randomColor()}, ${clrBorderOpacity})`,
                borderWidth: 1,
        }
        datasets.push(obj);
    } 
    return datasets;
}
