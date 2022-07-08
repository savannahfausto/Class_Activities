
//buttons
var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

//localStorage.getItem then pass in a string (think of it as a key)
var count = localStorage.getItem("count");

//take the counter and make it the counter.textContent
counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    //setItem takes 2 arugments: key and value (what do we want this to return when we call getItem.count)
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

//set item to store, get item to retrieve