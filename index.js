// Code your solution in this file!
function driversArray(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers;
}

function returnFirstTwoDrivers(){
    driversArray();
    const firstTwoDrivers = driversArray().slice(0,2);
    return firstTwoDrivers;
}
returnFirstTwoDrivers();

function returnLastTwoDrivers(){
    driversArray();
    const lastTwoDrivers = driversArray().slice(-2,4);
    return lastTwoDrivers;
}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

function createFareMultiplier(integer){
    return function(multiply){
        const createMultiplier = integer * multiply;
        return createMultiplier;
    };
}
createFareMultiplier(4);

function fareDoubler(integer1){
    return integer1 * 2;
}

function fareTripler(integer2){
    return integer2*3;
}
const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(drivers);
  }


