var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
//adds text to lis: 
li1.textContent = "Pizza 🍕";
li2.textContent = "Pineapple 🍍 ";
li3.textContent = "Steak (medium rare of course) 🍖";
li4.textContent = "Pasta 🍝";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
//appends lis to ordered list element
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods

//adds styling to list element
listEl.setAttribute("style", "background:#333333; padding: 20px");
//adds styling to lis 
li1.setAttribute("style", "color: whilte; background:#666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", "color: whilte; background:#777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", "color: whilte; background:#888888; padding: 5px; margin-left: 35px;");
li4 .setAttribute("style", "color: whilte; background:#999999; padding: 5px; margin-left: 35px;");