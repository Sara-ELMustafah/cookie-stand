'use strict';


let workHour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];




let divEl = document.getElementById('cookies');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);


function random(minCust, maxCust) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxCust - minCust + 1) + minCust);


}


let locations = [];
function Store(locName, minCustperHr, maxCustPerHr, avgCookies) {

    this.locName = locName;
    this.minCustperHr = minCustperHr;
    this.maxCustperHr = maxCustPerHr;
    this.avgCookies = avgCookies;
    this.randomCustom = [];
    this.salesCookies = [];
    this.totalSum = 0;

    locations.push(this)


    Store.prototype.custPerhour = function () {

        for (let hour = 0; hour < workHour.length; hour++) {

            this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
        }
        console.log(this);
    },

    Store.prototype.cookiesPerhour = function () {


            this.custPerhour();
            for (let i = 0; i < workHour.length; i++) {

                this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

                this.totalSum += this.salesCookies[i];

            }
        };
        Store.prototype.render = function () {
        let tableR = document.createElement('tr');
        tableEl.appendChild(tableR);
        let tableData = document.createElement('td') ;
        tableR.appendChild(tableData);
        tableData.textContent = this.locName;
        for (let i = 0; i < workHour.length; i++) {
            let tabledata = document.createElement('td');
            tableR.appendChild(tabledata);
            tabledata.textContent = this.salesCookies[i];

        }
        let tabledata1 = document.createElement('td');
        tableR.appendChild(tabledata1);
        tabledata1.textContent = this.totalSum;
    }
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);




function headerRow() {

    let tableRow1 = document.createElement('tr');
    tableEl.appendChild(tableRow1);
    let tableheading = document.createElement('th');
    tableRow1.appendChild(tableheading);
    tableheading.textContent = null;

    for (let index = 0; index < workHour.length; index++) {
        let tableheading = document.createElement('th');
        tableRow1.appendChild(tableheading);
        tableheading.textContent = workHour[index];

    }

    let tableCell = document.createElement('th');
    tableRow1.appendChild(tableCell);
    tableCell.textContent = "Daily Location Total"
}

function footerRow() {
    let footerRow = document.createElement('tfoot');
    tableEl.appendChild(footerRow);
    let tableR2 = document.createElement('tr');
    footerRow.appendChild(tableR2);
    let tabledata = document.createElement('td');
    tableR2.appendChild(tabledata);
    tabledata.textContent = 'Totals';
    let totalAllhours = 0;
    for (let i = 0; i < workHour.length; i++) {
        let totalPerhours =0;
        for(let j=0 ; j < locations.length ; j++){
            totalPerhours += locations[j].salesCookies[i];
            totalAllhours += locations[j].salesCookies[i];
        }
        
    
    let tablehdata2 = document.createElement('td');
    tableR2.appendChild(tablehdata2);
    tablehdata2.textContent = totalPerhours;
}
let tableCell = document.createElement('td');
tableR2.appendChild(tableCell);
tableCell.textContent = totalAllhours;
}
headerRow();
Seattle.custPerhour();
Seattle.cookiesPerhour();
Seattle.render();
Tokyo.custPerhour();
Tokyo.cookiesPerhour();
Tokyo.render();
Dubai.custPerhour();
Dubai.cookiesPerhour();
Dubai.render();
Paris.custPerhour();
Paris.cookiesPerhour();
Paris.render();
Lima.custPerhour();
Lima.cookiesPerhour();
Lima.render();
footerRow();




    
let locationForm = document.getElementById('locationForm');
locationForm.addEventListener('submit' , addALocation)

function addALocation(event){
    event.preventDefault();

   

   let locName = event.target.locName.value;
   let minCustperHr = parseInt(event.target.minCustperHr.value);
   let maxCustPerHr = parseInt(event.target.maxCustPerHr.value);
   let avgCookies = parseFloat(event.target.avgCookies.value);

   let newStore = new Store(locName, minCustperHr, maxCustPerHr, avgCookies );

    tableEl.deleteTFoot();
    
   newStore.custPerhour();
   newStore.cookiesPerhour();
   newStore.render();
   footerRow();
   function clearForm(){
    event.target.locName.value='';
    event.target.minCustperHr.value=null;
    event.target.maxCustPerHr.value=null;
    event.target.avgCookies.value=null;
  }
  clearForm();
}

