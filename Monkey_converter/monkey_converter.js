// ==UserScript==
// @name         Monkey Converter
// @version      1.0.1
// @description  Copies tampermonkey version of document into clipboard     // Takes everything between "// ==UserScript==" and "<\/script>" <br>/*  monkeyignore */ - ignores everything between those tags (with one space) /*  monkeyignore */     // Starts search at html
// @author       Me
// @match        file:///*.html
// @grant        GM_addStyle
// ==/UserScript==

(function() {
	'use strict';

	// Creating button
	var node = document.createElement("button");
	var textnode = document.createTextNode("to Monkey");
	node.appendChild(textnode);
	node.setAttribute("id", "convertToMonkey");
	node.setAttribute("title", "copies tampermonkey version of document into clipboard");
	document.querySelector("body").appendChild(node);

	document.querySelector("#convertToMonkey").addEventListener("click", function(){
		let fullDoc = document.querySelector("html").innerHTML;
		// Remove between monkey tags
		while(fullDoc.match(/\/\*\smonkeyignore\s\*\//)){
			fullDoc = fullDoc.replace(/\/\*\smonkeyignore\s\*\/.*?\/\*\smonkeyignore\s\*\//gs, "")
		}
		// Take everything from ==UserScript== and <\/script>
		let monkeyText = fullDoc.slice(fullDoc.indexOf("// ==UserScript=="), fullDoc.lastIndexOf("<\/script>"));
		// Add (function() {    })();
		monkeyText = monkeyText.substring(0, monkeyText.indexOf("// ==/UserScript==") + 18) + "\n\n\t\t\t(function() {" + monkeyText.substring(monkeyText.indexOf("// ==/UserScript==") + 18) + "\n";
		monkeyText += "\t\t\t})();";
		// Add to clipboard
		navigator.clipboard.writeText(monkeyText);
		this.innerHTML = "Copied";
	});

	GM_addStyle(`
		#convertToMonkey{
			border: 1px solid #118edc;
			all:unset;
			color:white;
			text-align:center;
			cursor:pointer;
			border-radius:2px;
			position:absolute;
			top:3px;
			left:3px;
			width:74px;
			font-size:12px;
			padding: 3px 2px;
			display:block;
			background-color: #056b00;
			font-family: Arial, Helvetica, sans-serif;
			transition: all 0.5s;
			z-index:9999999;
		}
		#convertToMonkey:hover{
			background-color: #004379;
		}
	`);
})();