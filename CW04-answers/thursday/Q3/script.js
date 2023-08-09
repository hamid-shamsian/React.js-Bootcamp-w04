function insert_Row() {
   const myTable = document.querySelector("#sampleTable");
   const myRow = document.querySelector("#sampleTable tr:last-of-type");

   const newRow = document.createElement("tr");
   newRow.innerHTML = "<td>Row cell1</td><td>Row cell2</td>";
   myTable.append(newRow);

   // myTable.append(myRow.cloneNode(true));
}
