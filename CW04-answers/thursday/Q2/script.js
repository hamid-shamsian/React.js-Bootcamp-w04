document.getElementById("submit").addEventListener("click", e => sendData(e));

function sendData(e) {
   e.preventDefault();
   console.log(document.querySelector("#username").value);
   console.log(document.querySelector("#password").value);
}
