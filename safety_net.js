// ==UserScript==
// @name         True Safey Net with emoji
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://app.youneedabudget.com/*
// ==/UserScript==

//4 parentElements for Categories, 3 for sub-categories
(function() {
    'use strict';

    window.setTimeout(() =>{
        let total = 0;
        let safetyNetCategories = document.querySelector(".budget-table-container").querySelectorAll('*[title^="🦺"]');
        let safetyNetRows = []
        let investedSafetyNet = document.querySelector('[class="nav-account offBudget ember-view"]').querySelectorAll('*[title^="🦺"]')



        for(let i=0; i < safetyNetCategories.length; i++) {
            safetyNetRows.push(safetyNetCategories[i].closest(".budget-table-row"))}

        for(let i=0; i < safetyNetRows.length; i++) {
            total += parseFloat(safetyNetRows[i].getElementsByClassName("budget-table-cell-available")[0].textContent.replace("$","").replace(",","").trim())}

        investedSafetyNet.forEach(item => total += parseFloat(item.closest(".nav-account-row").querySelector('.nav-account-value').textContent.replace("$","").replace(",","")))

        let heading = document.createElement("H3");
        let title = document.createTextNode("REAL SAFETY NET");
        heading.appendChild(title)
        let parentElement = document.getElementsByClassName("budget-inspector-default")[0]

        parentElement.insertBefore(heading, parentElement.childNodes[26])

        let subHeading = document.createElement("H1");
        subHeading.classList.add("user-data")

        let headingSpan = document.createElement("span");

        let bdi = document.createElement("bdi")
        bdi.innerText = '$';
        headingSpan.classList.add("user-data");
        headingSpan.classList.add("currency");
        headingSpan.classList.add("positive");
        headingSpan.innerHTML = total.toLocaleString();
        headingSpan.prepend(bdi);
        subHeading.appendChild(headingSpan);
        parentElement.insertBefore(subHeading, parentElement.childNodes[27])

    }, 10000)
}());