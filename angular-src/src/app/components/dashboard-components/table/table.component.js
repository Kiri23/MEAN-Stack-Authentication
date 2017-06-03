// To add External Javscript file I need to add it to the script section angular-cli.json
function filterUsersByName(){
  // Declare variables
 var input, filter, table, tr, td, i;
 input = document.getElementById("filterInput");
 filter = input.value.toUpperCase();

 table = document.getElementById("userTable");

 tr = table.getElementsByTagName("tr");

 reloadComponents(input);

 // Loop through all table rows, and hide those who don't match the search query
 for (i = 0; i < tr.length; i++) {
   // search if all the TR have a tagName TD
  // the first TR if the row of TH(table Header) and dont have a td(Table Data) tags. the [0] means the TH name.
   td = tr[i].getElementsByTagName("td")[0];
  //  console.log(td," all td with the header name");
  // if table Row have a Table Data do the logic
   if (td) {
     // the logic here is that if the td contains anywhere on the Td name the filter string(aka the input on the search bar) will output the position of the string.
     if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      // if the first td has a style.display none cambiarselos a block
       if (tr[i].getElementsByTagName("td")[0].style.display == "none"){
         tdsLenght = tr[i].getElementsByTagName("td").length
         tds = tr[i].getElementsByTagName("td")
         for(let td in tds){
           tds[0].style.display = ""
           tds[1].style.display = ""
           tds[2].style.display = ""
         }
       }
       tr[i].style.display = "";
     }
    //  if not found the stirng filter make the display to none
     else {
       tr[i].style.display = "none";
     }
   }
 }
}

// Reload Components
function reloadComponents (input){
  if (input.value ==""){
    // reload only the table using jquery
    // $("#userTable").hide();
    // Aqui se pudiera poner un spinerr using .show
    // no funciona correctamente hasta que busque una manera de como no volver a cargar los script ya cargados
    // $("#userTable").load("")
    location.reload();
  }

}

// Check if a Script is loaded. src = "https://cdn.ckeditor.com/4.7.0/standard/ckeditor.js"
function isScriptAlreadyIncluded(src){
    var scripts = document.getElementsByTagName("script");
    console.log(scripts , " scripts");
    for(var i = 0; i < scripts.length; i++)
       if(scripts[i].getAttribute('src') == src){
         // buscar una manera de como no volver a cargar el archivo ya cargado
         console.log(" file is already loaded");
         return true
       }
       console.log(" file is not loaded");
    return false;
}


// can't use module.export
// module.exports.myFunction = function(){
//   alert("Hola from Javascript exported function")
// };
