// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
//on line 7 changed from .children[2] --> .children[0].children[1] to access h3 inside of articles want to change font size of.
articlesDiv.children[0].children[1].style.fontSize = '50px';
//on line 9 added .children[0] to access h1 want to change color of
headerDiv.children[0].style.color = 'white';
