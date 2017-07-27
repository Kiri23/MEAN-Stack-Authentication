webpackJsonp([3,5],{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(341)(__webpack_require__(284))

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "// To add External Javscript file I need to add it to the script section angular-cli.json\nfunction filterUsersByName(){\n  // Declare variables\n var input, filter, table, tr, td, i;\n input = document.getElementById(\"filterInput\");\n filter = input.value.toUpperCase();\n\n table = document.getElementById(\"userTable\");\n\n tr = table.getElementsByTagName(\"tr\");\n\n reloadComponents(input);\n\n // Loop through all table rows, and hide those who don't match the search query\n for (i = 0; i < tr.length; i++) {\n   // search if all the TR have a tagName TD\n  // the first TR if the row of TH(table Header) and dont have a td(Table Data) tags. the [0] means the TH name.\n   td = tr[i].getElementsByTagName(\"td\")[0];\n  //  console.log(td,\" all td with the header name\");\n  // if table Row have a Table Data do the logic\n   if (td) {\n     // the logic here is that if the td contains anywhere on the Td name the filter string(aka the input on the search bar) will output the position of the string.\n     if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\n      // if the first td has a style.display none cambiarselos a block\n       if (tr[i].getElementsByTagName(\"td\")[0].style.display == \"none\"){\n         tdsLenght = tr[i].getElementsByTagName(\"td\").length\n         tds = tr[i].getElementsByTagName(\"td\")\n         for(let td in tds){\n           tds[0].style.display = \"\"\n           tds[1].style.display = \"\"\n           tds[2].style.display = \"\"\n         }\n       }\n       tr[i].style.display = \"\";\n     }\n    //  if not found the stirng filter make the display to none\n     else {\n       tr[i].style.display = \"none\";\n     }\n   }\n }\n}\n\n// Reload Components\nfunction reloadComponents (input){\n  if (input.value ==\"\"){\n    // reload only the table using jquery\n    // $(\"#userTable\").hide();\n    // Aqui se pudiera poner un spinerr using .show\n    // no funciona correctamente hasta que busque una manera de como no volver a cargar los script ya cargados\n    // $(\"#userTable\").load(\"\")\n    location.reload();\n  }\n\n}\n\n// Check if a Script is loaded. src = \"https://cdn.ckeditor.com/4.7.0/standard/ckeditor.js\"\nfunction isScriptAlreadyIncluded(src){\n    var scripts = document.getElementsByTagName(\"script\");\n    console.log(scripts , \" scripts\");\n    for(var i = 0; i < scripts.length; i++)\n       if(scripts[i].getAttribute('src') == src){\n         // buscar una manera de como no volver a cargar el archivo ya cargado\n         console.log(\" file is already loaded\");\n         return true\n       }\n       console.log(\" file is not loaded\");\n    return false;\n}\n\n\n// can't use module.export\n// module.exports.myFunction = function(){\n//   alert(\"Hola from Javascript exported function\")\n// };\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(172);


/***/ })

},[347]);
//# sourceMappingURL=scripts.bundle.js.map