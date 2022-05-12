// ==UserScript==
// @name         Img Downloader
// @version      1.0.1
// @description  Allows you to download images with Ctrl + click
// @author       Me
// @match        http*://*/*
// @noframes
// @grant        GM_download
// ==/UserScript==

(function(){
    'use strict';

    const svgAllowed = true;

    document.addEventListener("click", function(e){
        if(!e.ctrlKey || e.altKey)
            return;

        let imgNode = (e.target.tagName == "IMG") ? e.target : e.target.querySelector("img");
        
        if(!imgNode && svgAllowed){
            imgNode = (e.target.tagName == "SVG") ? e.target : e.target.querySelector("svg");
        }

        if(!imgNode)
            return;

        e.preventDefault();
        e.stopImmediatePropagation();

        let url = imgNode.src.replace(/\?.*/, "");

        let img = {
            url: url,
            // Remove extension AND all dots from name otherwise some extensions won't be downloaded
            // Extension will be added automatically
            name: url.slice(url.lastIndexOf("/") + 1, url.length).replace(/\.[^.]*$/, "").replace(/\./g, "")
        };

        GM_download(img);
    });
})();
