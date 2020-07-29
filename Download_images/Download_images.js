// ==UserScript==
// @name         Img Downloader
// @version      1.0.0
// @description  try to take over the world!
// @author       Me
// @match        http*://*/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        GM_download
// ==/UserScript==


(function(){
    'use strict';
    let hCtrlDown = false;

    $(document).on("keydown", function(e){
        if(e.key == "Control")
            hCtrlDown = true;
    });
    $(document).on("keyup", function(e){
        if(e.key == "Control")
            hCtrlDown = false;
    });
    $(document).on("click", function(e){
        if(!hCtrlDown)
            return;
        if(e.target.tagName.toLowerCase() != "img")
            return;
        e.preventDefault();
        let url = e.target.src;
        let img = {
            url: url,
            name: url.slice(url.lastIndexOf("/") + 1, url.length)
          };
        GM_download(img);
    });
})();