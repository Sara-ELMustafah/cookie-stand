'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const tableEl = document.getElementById('sales');

function SalmonCookies(location, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;

  this.customersPerHour = [];
  this.cookiesPerHour = [];
  
  this.sumHourlyTotals = 0;
}

SalmonCookies.prototype.customersPerHourFun = function() {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers));
  }
};


SalmonCookies.prototype.cookiesPerHourFun = function() {
  this.customersPerHourFun();
  for (let i = 0; i < hours.length; i++) {
  this.cookiesPerHour.push(parseInt(this.customersPerHour[i] * this.averageCookiesPerCustomer));
  this.sumHourlyTotalsFun();
  }
};


 SalmonCookies.prototype.sumHourlyTotalsFun = function() {
  this.customersPerHourFun();
  for (let i = 0; i < hours.length; i++) {
  this.sumHourlyTotals += parseInt(this.customersPerHour[i] * this.averageCookiesPerCustomer);
  }
};


SalmonCookies.prototype.displayFun = function() {
  this.cookiesPerHourFun();
  const tRow = document.createElement('tr');
  let tData = document.createElement('td');
  tData.textContent = this.location;
  tRow.appendChild(tData);
  for (let i = 0; i < hours.length; i++) {
    tData = document.createElement('td');
    tData.textContent = this.cookiesPerHour[i];
    tRow.appendChild(tData);
  }
  const tHeader = document.createElement('th');
  tHeader.textContent = this.sumHourlyTotals;
  tRow.appendChild(tHeader);
  tableEl.appendChild(tRow);
};

var locations=[];
locations[0]=new SalmonCookies('Seattle', 23, 65, 6.3);
locations[1]=new SalmonCookies('Tokyo', 3, 24, 1.2);
locations[2]=new SalmonCookies('Dubai', 11, 38, 3.7);
locations[3]=new SalmonCookies('Paris', 20, 38, 2.3);
locations[4]=new SalmonCookies('Lima', 2, 16, 4.6);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function headerFun() {
  const tRow = document.createElement('tr');
  let tHeader = document.createElement('th');
  tRow.appendChild(tHeader);
  for (let i = 0; i < hours.length; i++) {
    tHeader = document.createElement('th');
    tHeader.textContent = hours[i];
    tRow.appendChild(tHeader);
  }
  tHeader = document.createElement('th');
  tHeader.textContent = 'Daily Location Total';
  tRow.appendChild(tHeader);
  tableEl.appendChild(tRow);
}

function footerFun() {
  const tRow = document.createElement('tr');
  let tHeader = document.createElement('th');
  tHeader.textContent = 'Totals';
  tRow.appendChild(tHeader);
  let finalTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let totalPerHour = 0;
    for (let j = 0; j < locations.length; j++){
      totalPerHour += locations[j].cookiesPerHour[i];
      finalTotals += locations[j].cookiesPerHour[i];
    }
    tHeader = document.createElement('th');
    tHeader.textContent = totalPerHour;
    tRow.appendChild(tHeader);
  }
  tHeader = document.createElement('th');
  tHeader.textContent = finalTotals;
  tRow.appendChild(tHeader);
  tableEl.appendChild(tRow);
}

headerFun();
for(let i = 0; i < locations.length; i++){
  locations[i].displayFun();
}
footerFun();
