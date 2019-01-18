// ==UserScript==
// @name         My Ticket History Finder Team Dynamics(TD)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Creating a button to get me all the tickets I have worked on in the past
// @author       You
// @match        https://oregonstate.teamdynamix.com/TDNext/Home/Desktop/*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==
var $ = window.jQuery;

function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  head.appendChild(style);
}

//addGlobalStyle('.switch input { opacity: 0; width: 0; height: 0; }'); Example of how to add css element

$(document).ready(function() {
   'use strict';
   var historyApp = $('ul.nav.nav-pills.pull-left');
   historyApp.append('<li><a class="btn btn-link ticketHistoryButton" title="My Ticket History"><span class="fa fa-history fa-nopad" aria-hidden="true"></span><span class="hidden-xs padding-left-xs">My Ticket History</span></a></li>');
});