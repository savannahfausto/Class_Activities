var keyEl = document.querySelector ('#key');
var codeEl = document.querySelector ('#code');
var statusEl = document.querySelector ('#status');



function keydownAction(event) {
  // TODO: Complete keydown function
  // dont need this, not in form; event.preventDefault()
  //did this one in class. added variables that didnt need.. retried it and took out variables inside function and worked. 
  /*var typeKey = event.key;
  var typeCode = event.code;
  keyEl.innerHTML = typeKey;
  codeEl.innerHTML = typeCode;
  statusEl.innerHTML = "KEYDOWN Event";*/
//at first had event.key = keyEL.innerHTML and that didnt work so switched them and that worked. 
  keyEl.innerHTML = event.key;
  codeEl.innerHTML = event.code;
  statusEl.innerHTML = "KEYDOWN Event";

}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
