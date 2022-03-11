// ==UserScript==
// @name         Img Downloader
// @version      1.0.0
// @description  try to take over the world!
// @author       Me
// @match        http*://*/*
// @grant        GM_download
// ==/UserScript==

(function(){
    'use strict';

    document.addEventListener("click", function(e){
        if(!e.ctrlKey)
            return;

        let imgNode = (e.target.tagName == "IMG") ? e.target : e.target.querySelector("img");

        if(!imgNode)
            return;

        e.preventDefault();

        let url = imgNode.src.replace(/\?.*/, "");

        let img = {
            url: url,
            name: url.slice(url.lastIndexOf("/") + 1, url.length)
          };
        GM_download(img);

        return;

        let url2 = imgNode.src;
        let link = document.createElement("a");
        let filename = url.slice(url2.lastIndexOf("/") + 1, url2.length);

        link.href = url2;
        link.download = filename;

        link.click();
    });
})();
