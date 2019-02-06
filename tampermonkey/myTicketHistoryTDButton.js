// ==UserScript==
// @name         My Ticket History Finder Team Dynamics(TD)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Creating a button to get me all the tickets I have worked on in the past
// @author       You
// @match        https://oregonstate.teamdynamix.com/TDNext/Home/Desktop/*
// @grant        GM_xmlhttpRequest
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var $ = window.jQuery;

function sendTicketHistory(){
    console.log("Helloooo")
    GM_xmlhttpRequest ( {
        method: "GET",
  url: "http://www.google.com",
  onload: function(res) {
    console.log(res.responseText);
  }
    } );
}

$(document).ready(function() {
    'use strict';
    var historyApp = $('ul.nav.nav-pills.pull-left');
    historyApp.append('<li id="ticketHistoryButton" >'
        +'<a id="clickableHistoryButton" class="btn btn-link" title="My Ticket History" target="_blank">'
        +'<span class="fa fa-history fa-nopad" aria-hidden="true"></span><span class="hidden-xs padding-left-xs">My Ticket History</span>'
        +'</a></li>');

        document.getElementById('clickableHistoryButton').addEventListener("click",sendTicketHistory);
});