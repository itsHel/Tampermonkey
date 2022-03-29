// ==UserScript==
// @name         HackerNews Less Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *news.ycombinator.com/*
// ==/UserScript==

(function() {
    'use strict';

    let link = document.querySelector(".morelink");

    let newHref = link.href.replace(/\d+/, function(val){return val - 2});

    let newLink = link.cloneNode();

    newLink.href = newHref;
    newLink.textContent = "Less";

    link.parentNode.style.display = "flex";
    link.parentNode.style.flexDirection = "column";
    link.parentNode.style.gap = "8px";

    link.insertAdjacentElement("beforebegin", newLink);
})();
