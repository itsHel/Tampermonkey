##### Copies tampermonkey version of document's script into clipboard

__/* monkeyignore */__ - ignores everything between those tags

Example: __/* monkeyignore */__ Text to ignore __/* monkeyignore */__

Works only in __file:///*.html__

Starts search at <html>
Takes everything between "// ==UserScript==" and "<\/script>" 
