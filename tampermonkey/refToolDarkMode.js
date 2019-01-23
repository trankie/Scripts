// ==UserScript==
// @name         Dark Mode RefTool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Creating a button to change CSS in RefTool for darker theme
// @author       You
// @match        https://tools.is.oregonstate.edu/reftool2/*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var $ = window.jQuery;
var darkModeEnable = false;
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function setDarkMode() {
    if (darkModeEnable === false){
        console.log("You fucked up");
        darkModeEnable = true;
    }else if(darkModeEnable === true){
        console.log("You fucked up hard!!!");
        darkModeEnable = false;
    }
}

addGlobalStyle('.button { background-color: transparent; border: none; color: white; padding-top: 12px; padding-bottom: 12px; line-height: 21px; display: block; padding-right: 15px; padding-left: 15px;}');


$(document).ready(function() {
    'use strict';
    var darkModeApp = $('ul.nav.navbar-nav.navbar-right');
    darkModeApp.prepend('<li _ngcontent-c3 >'
        +'<input _ngcontent-c3 id="darkModeButtonID" type="button" class="button" value="Dark Mode">'
        +'</li>');

    document.getElementById('darkModeButtonID').addEventListener("click",setDarkMode);
});