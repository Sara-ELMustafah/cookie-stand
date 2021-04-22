'use strict';

const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function  SalmonCookies(location,minHourlyCustomers,maxHourlyCustomers,averageCookiesPerCustomer){
    this.location=location;
    this.minHourlyCustomers=minHourlyCustomers;
    this.maxHourlyCustomers=maxHourlyCustomers;
    this.averageCookiesPerCustomer=averageCookiesPerCustomer;
    
    this.customersPerHour=[];
    this.cookiesPerHour=[],

    this.sumHourlyTotals=0;
}

SalmonCookies.prototype.customersPerHour=function(){
    for(let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minHourlyCustomers,this.maxHourlyCustomers));
        }
};

SalmonCookies.prototype.cookiesPerHourFun=function(){
    this.customersPerHourFun();
        for(let i=0;i<hours.length;i++){
            console.log(this.customersPerHour[i]);
            console.log(this.averageCookiesPerCustomer);
        this.cookiesPerHour.push(parseInt(this.customersPerHour[i]*this.averageCookiesPerCustomer));
        }
};

SalmonCookies.prototype.sumHourlyTotalsFun=function(){
    this.customersPerHourFun();
        for(let i=0;i<hours.length;i++){
            /*console.log(this.customersPerHour[i]);
            console.log(this.averageCookiesPerCustomer);*/
        this.sumHourlyTotals=parseInt(this.sumHourlyTotals+(this.customersPerHour[i]*this.averageCookiesPerCustomer));
        }
};

SalmonCookies.prototype.displayFun=function(){
    console.log(this);
        this. cookiesPerHourFun();
        this.sumHourlyTotalsFun();
        let uolistelement=document.getElementById('S');
        for(let i=0;i<hours.length;i++){
        let lielement=document.createElement('li');
        lielement.textContent=hours[i]+": "+this.cookiesPerHour[i]+" cookies";
        uolistelement.appendChild(lielement);
        }

        let lielement=document.createElement('li');
        lielement.textContent='Total: '+this.sumHourlyTotals;
        uolistelement.appendChild(lielement);
            
    
};


function random(minCust,maxCust) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxCust - minCust + 1) + minCust);
}


let Seattle=new SalmonCookies("Seattle",23,65,6.3);
//Seattle.prototype.displayFun();
Seattle.displayFun();
   //******************************************************************************************