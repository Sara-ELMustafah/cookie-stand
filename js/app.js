'use strict';

//To put it here as global will be better to avoid repeate it 5 times
const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//The name of literal object should begin with small letter
let seattle = {
    location: 'Seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averageCookiesPerCustomer: 6.3,
    
    customersPerHour: [],
    cookiesPerHour: [],


    sumHourlyTotals:0,

    customersPerHourFun: function (){
     for(let i=0;i<hours.length;i++){
     this.customersPerHour.push(random(this.minHourlyCustomers,this.maxHourlyCustomers));
     }
    },


    cookiesPerHourFun: function () {
        this.customersPerHourFun();
        for(let i=0;i<hours.length;i++){
            console.log(this.customersPerHour[i]);
            console.log(this.averageCookiesPerCustomer);
            //You can use parseInt instead of Math.ceil or Math.floor to make sure it's int
        this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i]*this.averageCookiesPerCustomer));
        //this.sumHourlyTotals += this.cookiesPerHour[i]; instead of sumHourlyTotalsFun
        }
       },


       sumHourlyTotalsFun: function (){
        this.customersPerHourFun();
        for(let i=0;i<hours.length;i++){
            /*console.log(this.customersPerHour[i]);
            console.log(this.averageCookiesPerCustomer);*/
        this.sumHourlyTotals=parseInt(this.sumHourlyTotals+(this.customersPerHour[i]*this.averageCookiesPerCustomer));
        }
       },

       //render function
       //creat div in the sales.html append h2 and the list to it
       displayFun: function (){
        console.log(this);
        this. cookiesPerHourFun();
        this.sumHourlyTotalsFun();
        let uolistelement=document.getElementById('S');
        for(let i=0;i<hours.length;i++){
        let lielement=document.createElement('li');
        lielement.textContent=hours[i]+": "+this.cookiesPerHour[i]+" cookies";
        //lielement.textContent=`${hours[i]}:${this.cookiesPerHour[i]}cookies`;
        uolistelement.appendChild(lielement);
        }

        let lielement=document.createElement('li');
        lielement.textContent='Total: '+this.sumHourlyTotals;
        //lielement.textContent=`Total: ${this.sumHourlyTotals} cookies`;
        uolistelement.appendChild(lielement);
       }     
    
};
function random(minCust,maxCust) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxCust - minCust + 1) + minCust);
}

//You can call the functions outside
//seattle.customersPerHourFun();
//seattle.cookiesPerHourFun();

seattle.displayFun();

//******************************************************************************************

let Tokyo = {
    location: 'Tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    averageCookiesPerCustomer: 1.2,
    
    customersPerHour: [],
    cookiesPerHour: [],


    sumHourlyTotals:0,

    customersPerHourFun: function (){
     for(let i=0;i<hours.length;i++){
     this.customersPerHour.push(random(this.minHourlyCustomers,this.maxHourlyCustomers));
     }
    },


    cookiesPerHourFun: function () {
        this.customersPerHourFun();
        for(let i=0;i<hours.length;i++){
            console.log(this.customersPerHour[i]);
            console.log(this.averageCookiesPerCustomer);
        this.cookiesPerHour.push(parseInt(this.customersPerHour[i]*this.averageCookiesPerCustomer));
        }
       },


       sumHourlyTotalsFun: function (){
        this.customersPerHourFun();
        for(let i=0;i<hours.length;i++){
            /*console.log(this.customersPerHour[i]);
            console.log(this.averageCookiesPerCustomer);*/
        this.sumHourlyTotals=parseInt(this.sumHourlyTotals+(this.customersPerHour[i]*this.averageCookiesPerCustomer));
        }
       },


       displayFun: function (){
        console.log(this);
        this. cookiesPerHourFun();
        this.sumHourlyTotalsFun();
        let uolistelement=document.getElementById('T');
        for(let i=0;i<hours.length;i++){
        let lielement=document.createElement('li');
        lielement.textContent=hours[i]+": "+this.cookiesPerHour[i]+" cookies";
        uolistelement.appendChild(lielement);
        }

        let lielement=document.createElement('li');
        lielement.textContent='Total: '+this.sumHourlyTotals;
        uolistelement.appendChild(lielement);
       }     
    
};

Tokyo.displayFun();

//******************************************************************************************

let Dubai = {
    location: 'Dubai',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer: 3.7,
    
    customersPerHour: [],
    cookiesPerHour: [],


    sumHourlyTotals:0,

    customersPerHourFun: function (){
     for(let i=0;i<hours.length;i++){
     this.customersPerHour.push(random(this.minHourlyCustomers,this.maxHourlyCustomers));
     }
    },


    cookiesPerHourFun: function () {
        this.customersPerHourFun();
        for(let i=0;i<hours.length;i++){
            console.log(this.customersPerHour[i]);
            console.log(this.averageCookiesPerCustomer);
        this.cookiesPerHour.push(parseInt(this.customersPerHour[i]*this.averageCookiesPerCustomer));
        }
       },


       sumHourlyTotalsFun: function (){
        this.customersPerHourFun();
        for(let i=0;i<hours.length;i++){
            /*console.log(this.customersPerHour[i]);
            console.log(this.averageCookiesPerCustomer);*/
        this.sumHourlyTotals=parseInt(this.sumHourlyTotals+(this.customersPerHour[i]*this.averageCookiesPerCustomer));
        }
       },


       displayFun: function (){
        console.log(this);
        this. cookiesPerHourFun();
        this.sumHourlyTotalsFun();
        let uolistelement=document.getElementById('D');
        for(let i=0;i<hours.length;i++){
        let lielement=document.createElement('li');
        lielement.textContent=hours[i]+": "+this.cookiesPerHour[i]+" cookies";
        uolistelement.appendChild(lielement);
        }

        let lielement=document.createElement('li');
        lielement.textContent='Total: '+this.sumHourlyTotals;
        uolistelement.appendChild(lielement);
       }     
    
};

Dubai.displayFun();

//******************************************************************************************

let Paris = {
    location: 'Paris',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer: 2.3,
    
    customersPerHour: [],
    cookiesPerHour: [],

    sumHourlyTotals:0,

    
    customersPerHourFun: function (){
        for(let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minHourlyCustomers,this.maxHourlyCustomers));
        }
       },
   
   
       cookiesPerHourFun: function () {
           this.customersPerHourFun();
           for(let i=0;i<hours.length;i++){
               console.log(this.customersPerHour[i]);
               console.log(this.averageCookiesPerCustomer);
           this.cookiesPerHour.push(parseInt(this.customersPerHour[i]*this.averageCookiesPerCustomer));
           }
          },
   
   
          sumHourlyTotalsFun: function (){
           this.customersPerHourFun();
           for(let i=0;i<hours.length;i++){
               /*console.log(this.customersPerHour[i]);
               console.log(this.averageCookiesPerCustomer);*/
           this.sumHourlyTotals=parseInt(this.sumHourlyTotals+(this.customersPerHour[i]*this.averageCookiesPerCustomer));
           }
          },
   
   
          displayFun: function (){
           console.log(this);
           this. cookiesPerHourFun();
           this.sumHourlyTotalsFun();
           let uolistelement=document.getElementById('P');
           for(let i=0;i<hours.length;i++){
           let lielement=document.createElement('li');
           lielement.textContent=hours[i]+": "+this.cookiesPerHour[i]+" cookies";
           uolistelement.appendChild(lielement);
           }
   
           let lielement=document.createElement('li');
           lielement.textContent='Total: '+this.sumHourlyTotals;
           uolistelement.appendChild(lielement);
          }     
       
   };
   
   Paris.displayFun();
   
   //******************************************************************************************

   let Lima = {
    location: 'Lima',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer: 2.3,
    
    customersPerHour: [],
    cookiesPerHour: [],

    sumHourlyTotals:0,

    
    customersPerHourFun: function (){
        for(let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minHourlyCustomers,this.maxHourlyCustomers));
        }
       },
   
   
       cookiesPerHourFun: function () {
           this.customersPerHourFun();
           for(let i=0;i<hours.length;i++){
               console.log(this.customersPerHour[i]);
               console.log(this.averageCookiesPerCustomer);
           this.cookiesPerHour.push(parseInt(this.customersPerHour[i]*this.averageCookiesPerCustomer));
           }
          },
   
   
          sumHourlyTotalsFun: function (){
           this.customersPerHourFun();
           for(let i=0;i<hours.length;i++){
               /*console.log(this.customersPerHour[i]);
               console.log(this.averageCookiesPerCustomer);*/
           this.sumHourlyTotals=parseInt(this.sumHourlyTotals+(this.customersPerHour[i]*this.averageCookiesPerCustomer));
           }
          },
   
   
          displayFun: function (){
           console.log(this);
           this. cookiesPerHourFun();
           this.sumHourlyTotalsFun();
           let uolistelement=document.getElementById('L');
           for(let i=0;i<hours.length;i++){
           let lielement=document.createElement('li');
           lielement.textContent=hours[i]+": "+this.cookiesPerHour[i]+" cookies";
           uolistelement.appendChild(lielement);
           }
   
           let lielement=document.createElement('li');
           lielement.textContent='Total: '+this.sumHourlyTotals;
           uolistelement.appendChild(lielement);
          }     
       
   };
   
   Lima.displayFun();
   
   //******************************************************************************************