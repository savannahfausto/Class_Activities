var keyEl = document.querySelector ('#key');
var codeEl = document.querySelector ('#code');
var statusEl = document.querySelector ('#status');



function keydownAction(event) {
  // TODO: Complete keydown function
  event.preventDefault()
  var typeKey = event.key;
  var typeCode = event.code;
  keyEl.innerHTML = typeKey;
  codeEl.innerHTML = typeCode;
  statusEl.innerHTML = "KeyDown";

}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
