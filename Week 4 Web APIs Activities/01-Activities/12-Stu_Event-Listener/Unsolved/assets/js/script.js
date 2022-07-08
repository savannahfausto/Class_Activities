//given: created a count and starting the count at 0
var count = 0;
//given: creates a variable that points to the element of the increment/decrement and the place where you update the account.
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

//given: once you figure out whether its been incremented or decremented, then you call this setCounterText function which updates the number on the screen
function setCounterText() {
  countEl.textContent = count;
}

//so all we need to do is just add the event listeners for the buttons: 

// TODO: Add event listener to increment button
incrementEl.addEventListener ("click", function() {
count++;
setCounterText()
});

// TODO: Add event listener to decrement button
decrementEl.addEventListener ("click", function() {
  if (count > 0){
    count--
  setCounterText()
  }
  });

