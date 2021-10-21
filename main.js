const table1        = document.getElementById('table1');




//"data" :[ {id:"1", country:"pays", year1:data, year1:data, year1:data}, {conutry:"pays", year1:data, year1:data, year1:data} ];


// // source: https://stackoverflow.com/a/68047870

/* Je récupère chaque row du tableau numéro 1 que je place dans un array inside un array*/
const dataTable1 = [...table1.rows].map(row => [...row.cells].map(td => td.innerText));
dataTable1.splice(0,2); /* supprime les 2ere row*/

/* surprime les caractères spéciaux (²) */
let reg = new RegExp( /(\(.\))/g );
dataTable1.forEach(element => {
     element[1] = element[1].replace(reg, '');
})


/* Je récupère la row du tableau avec les dates et remplace les deux 1er éléments */
let dataKey = [...table1.rows[1].cells].map(td => td.innerText);
dataKey.splice(0,2, 'id','country');



console.log(dataTable1);


/* assembler les deux pour créer un object */

























let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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