// ==UserScript==
// @name         Dark Mode RefTool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Creating a button to change CSS in RefTool for darker theme
// @author       You
// @match        https://tools.is.oregonstate.edu/reftool2/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// @require https://raw.githubusercontent.com/carhartl/jquery-cookie/master/src/jquery.cookie.js
// ==/UserScript==

var $ = window.jQuery;
var darkModeEnable = 'false';
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function preCheck(){
    if(darkModeEnable === 'false'){
        addGlobalStyle('body { background-color: #EEEEEE !important;}');
        addGlobalStyle('div.panel.panel-default {background-color: white; border-color: white}');
        addGlobalStyle('div.col-md-12 {background-color: white; border-color: white}');
        //addGlobalStyle('div.container-fluid {background-color: #008cba;}');
        addGlobalStyle('input.form-control {background-color: white; border-color: white; color: grey;}');
        addGlobalStyle('select.form-control.ng-pristine.ng-valid {background-color: white; border-color: white; color: grey;}');
    }else if(darkModeEnable === 'true'){
        addGlobalStyle('body { background-color: #232323bf !important;}');
        addGlobalStyle('div.panel.panel-default {background-color: #888888c2; border-color: #888888c2}');
        addGlobalStyle('div.col-md-12 {background-color: #ffffff75; border-color: #ffffff75}');
        //addGlobalStyle('div.container-fluid {background-color: #333333;}');
        addGlobalStyle('input.form-control {background-color: grey; border-color: grey; color: white;}');
        addGlobalStyle('select.form-control.ng-pristine.ng-valid {background-color: grey; border-color: grey; color: white;}');
    }
}

function setDarkMode() {
    if (darkModeEnable === 'false'){
        addGlobalStyle('body { background-color: #232323bf !important;}');
        addGlobalStyle('div.panel.panel-default {background-color: #888888c2; border-color: #888888c2}');
        addGlobalStyle('div.col-md-12 {background-color: #ffffff75; border-color: #ffffff75}');
        //addGlobalStyle('div.container-fluid {background-color: #333333;}');
        addGlobalStyle('input.form-control {background-color: grey; border-color: grey; color: white;}');
        addGlobalStyle('select.form-control.ng-pristine.ng-valid {background-color: grey; border-color: grey; color: white;}');
        darkModeEnable = 'true';

    }else if(darkModeEnable === 'true'){
        addGlobalStyle('body { background-color: #EEEEEE !important;}');
        addGlobalStyle('div.panel.panel-default {background-color: white; border-color: white}');
        addGlobalStyle('div.col-md-12 {background-color: white; border-color: white}');
        //addGlobalStyle('div.container-fluid {background-color: #008cba;}');
        addGlobalStyle('input.form-control {background-color: white; border-color: white; color: grey;}');
        addGlobalStyle('select.form-control.ng-pristine.ng-valid {background-color: white; border-color: white; color: grey;}');
        darkModeEnable = 'false';
    }
    $.cookie('darkModeEnable', darkModeEnable);
}

addGlobalStyle('.button { background-color: transparent; border: none; color: white; padding-top: 12px; padding-bottom: 12px; line-height: 21px; display: block; padding-right: 15px; padding-left: 15px;}');

$(document).ready(function() {
    'use strict';
    var cookieChecker = $.cookie("darkModeEnable");
    if(typeof cookieChecker === 'undefined'){
        $.cookie('darkModeEnable', 'false');
        cookieChecker = $.cookie("darkModeEnable");
    }else{
        darkModeEnable = cookieChecker;
        preCheck();
    }
    
    var darkModeApp = $('ul.nav.navbar-nav.navbar-right');
    darkModeApp.prepend('<li _ngcontent-c3 >'
        +'<input _ngcontent-c3 id="darkModeButtonID" type="button" class="button" value="Dark Mode">'
        +'</li>');

    document.getElementById('darkModeButtonID').addEventListener("click",setDarkMode);
});