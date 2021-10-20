const table1         = document.getElementById('table1');
let i=0,j =0;

const rowCountTbody = table1.tBodies[0].rows.length;
const rowLenght     = table1.rows[i].cells.length;
const datatable1 = [];
const data2 = [];
// supprimer les éléments Null d'un array => array = array.filter(e => e != null);

// array = [{conutry:"pays", year1:data, year1:data, year1:data}, {conutry:"pays", year1:data, year1:data, year1:data}];


const data = [...table1.rows].map(row => [...row.cells].map(td => td.innerText));
// source: https://stackoverflow.com/a/68047870

console.log(data);