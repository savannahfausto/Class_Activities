// Assemble: Create/select DOM elements
var rootEl = $('#root');


// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children('ul').children().css('background-color', 'white');
// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
var blockO = $("#item-a3");
rootEl.children().eq(3).children().eq(0).text("O");
//console.log(rootEl.children().eq(3).children().eq(0).text("O"));
rootEl.children().eq(1).children().eq(0).text("O");