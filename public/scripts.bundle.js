webpackJsonp([3,5],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(323)(__webpack_require__(268))

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "// To add External Javscript file I need to add it to the script section angular-cli.json\nfunction filterUsersByName(){\n  // Declare variables\n var input, filter, table, tr, td, i;\n input = document.getElementById(\"filterInput\");\n filter = input.value.toUpperCase();\n // alert(filter);\n table = document.getElementById(\"userTable\");\n // console.log(table);\n tr = table.getElementsByTagName(\"tr\")\n // console.log(tr);\n\n // Loop through all table rows, and hide those who don't match the search query\n for (i = 0; i < tr.length; i++) {\n   // search if all the TR have a tagName TD\n  // the first TR if the row of TH(table Header) and dont have a td(Table Data) tags. the [0] means the TH name.\n   td = tr[i].getElementsByTagName(\"td\")[0];\n  // if table Row have a Table Data do the logic\n   if (td) {\n     // the logic here is that if the td contains anywhere on the Td name the filter string(aka the input on the search bar) will output the position of the string.\n     if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\n       tr[i].style.display = \"\";\n     }\n    //  if not found the stirng filter make the display to none\n     else {\n       tr[i].style.display = \"none\";\n     }\n   }\n }\n}\n\n\n\n// can't use module.export\n// module.exports.myFunction = function(){\n//   alert(\"Hola from Javascript exported function\")\n// };\n"

/***/ }),

/***/ 323:
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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);


/***/ })

},[329]);
//# sourceMappingURL=scripts.bundle.js.map