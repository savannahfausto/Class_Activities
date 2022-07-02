
// assigns `customerOrder` object with three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready. 

var customerOrder = {
    drinkName: "latte",
    sugarNumber: 4,
    isReady: true,
}


//logs to the console drink name and the number of sugars 

console.log('customerOrder.drinkName:', customerOrder.drinkName);

console.log('customerOrder.sugarNumber:', customerOrder.sugarNumber);

//Conditional statement to show if the order is ready, the message `"Ready for pick-up"` logs. If the order is not ready, the message `"Still in order queue"` logs. 

if (customerOrder.isReady === true) {
    console.log ("Ready for pick-up");
 } else {
    console.log ("Still in order queue.");
}