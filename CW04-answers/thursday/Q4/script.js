document.getElementById("myButton").addEventListener("click", removeItem);

function removeItem() {
   document.getElementById("select-box").lastElementChild.remove();
}
