// To add External Javscript file I need to add it to the script section angular-cli.json
function filterUsersByName(){
  // Declare variables
 var input, filter, table, tr, td, i;
 input = document.getElementById("filterInput");
 filter = input.value.toUpperCase();
 // alert(filter);
 table = document.getElementById("userTable");
 // console.log(table);
 tr = table.getElementsByTagName("tr")
 // console.log(tr);

 // Loop through all table rows, and hide those who don't match the search query
 for (i = 0; i < tr.length; i++) {
   // search if all the TR have a tagName TD
  // the first TR if the row of TH(table Header) and dont have a td(Table Data) tags. the [0] means the TH name.
   td = tr[i].getElementsByTagName("td")[0];
  // if table Row have a Table Data do the logic
   if (td) {
     // the logic here is that if the td contains anywhere on the Td name the filter string(aka the input on the search bar) will output the position of the string.
     if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
       tr[i].style.display = "";
     }
    //  if not found the stirng filter make the display to none
     else {
       tr[i].style.display = "none";
     }
   }
 }
}



// can't use module.export
// module.exports.myFunction = function(){
//   alert("Hola from Javascript exported function")
// };
