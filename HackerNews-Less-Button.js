// ==UserScript==
// @name         HackerNews Less Button
// @version      1.0.1
// @description  Add "Less" which works as reversed "More" button
// @author       Hel
// @match        *news.ycombinator.com/*
// ==/UserScript==

(function() {
    try{
        let pageNumber = location.search.match(/p=(\d+)/);

        if(!pageNumber || pageNumber[1] == 1){
            return;
        } else {
            pageNumber = pageNumber[1];
        }

        let link = document.querySelector(".morelink");

        if(link){
            let newHref = link.href.replace(/\d+/, pageNumber - 1);
            let newLink = link.cloneNode();

            newLink.href = newHref;
            newLink.textContent = "Less";

            link.parentNode.style.display = "flex";
            newLink.style.marginLeft = "auto";
            newLink.style.marginright = "3rem";

            link.insertAdjacentElement("afterend", newLink);
        } else {
            let parent = document.querySelector("table.itemlist tbody");

            let newHtml = `
                <tr class="morespace" style="height:10px"></tr>
                <tr>
                    <td colspan="2"></td>
                    <td class="title"><a href="${location.href.replace(/p=\d+/, "p=" + (pageNumber - 1) + "")}" class="morelink" rel="next">Less</a></td>
                </tr>`;

            parent.insertAdjacentHTML("beforeend", newHtml);
        }
    }catch(e){}
})();
