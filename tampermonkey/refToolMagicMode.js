// ==UserScript==
// @name         Magic Mode RefTool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Creating a button to change CSS in RefTool for magical theme
// @author       You
// @match        https://tools.is.oregonstate.edu/reftool2/*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var $ = window.jQuery;
var magicEnable = false;
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function setMagicMode() {
    if (magicEnable === false){
        $("input.form-control").addClass('wrapper');
        $("select.form-control.ng-pristine.ng-valid").addClass('wrapper');
        magicEnable = true;
    }else if(magicEnable === true){
        $("input.form-control").removeClass('wrapper');
        $("select.form-control.ng-pristine.ng-valid").removeClass('wrapper');
        magicEnable = false;
    }
}

addGlobalStyle('.button { background-color: transparent; border: none; color: white; padding-top: 12px; padding-bottom: 12px; line-height: 21px; display: block; padding-right: 15px; padding-left: 15px;}');
addGlobalStyle('.wrapper { background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);'
    +'background-size: 1800% 1800%;'
    +'-webkit-animation: rainbow 18s ease infinite;'
    +'-z-animation: rainbow 18s ease infinite;'
    +'-o-animation: rainbow 18s ease infinite;'
    +'animation: rainbow 18s ease infinite;}');

addGlobalStyle('@-webkit-keyframes rainbow { 0%{background-position:0% 82%}'
      +'50%{background-position:100% 19%}'
      +'100%{background-position:0% 82%}}');

addGlobalStyle('@-moz-keyframes rainbow { 0%{background-position:0% 82%}'
      +'50%{background-position:100% 19%}'
      +'100%{background-position:0% 82%}}');
      
addGlobalStyle('@-o-keyframes rainbow { 0%{background-position:0% 82%}'
      +'50%{background-position:100% 19%}'
      +'100%{background-position:0% 82%}}');

addGlobalStyle('@keyframes rainbow { 0%{background-position:0% 82%}'
      +'50%{background-position:100% 19%}'
      +'100%{background-position:0% 82%}}');

$(document).ready(function() {
    'use strict';
    var darkModeApp = $('ul.nav.navbar-nav.navbar-right');
    darkModeApp.prepend('<li _ngcontent-c3 >'
        +'<input _ngcontent-c3 id="magicModeID" type="button" class="button" value="Magic Mode">'
        +'</li>');

    document.getElementById('magicModeID').addEventListener("click",setMagicMode);
});