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

$(document).ready(function() {
    'use strict';
    var historyApp = $('ul.nav.nav-pills.pull-left');
    historyApp.append('<li id="ticketHistoryButton" >'
        +'<a href="https://oregonstate.teamdynamix.com/TDNext/Apps/425/Tickets/TicketSearch?CMPNTID=9" class="btn btn-link" title="My Ticket History" target="_blank">'
        +'<span class="fa fa-history fa-nopad" aria-hidden="true"></span><span class="hidden-xs padding-left-xs">My Ticket History</span>'
        +'</a></li>');
});