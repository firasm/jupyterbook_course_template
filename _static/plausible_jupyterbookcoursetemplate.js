// NOTE: This file allows my privacy-focused analytics provider (Plausible) to 
// collect data on various aspects of usage.
// Those that are using this repo as a template should REMOVE this file from their repo

var script = document.createElement("script");
script.defer = true;
script.src = "https://plausible.io/js/script.js";
script.dataset.domain = "jupyterbookcoursetemplate";

// optional if using proxy
// script.dataset.api = 'https://yourproxy.com/api/event';

document.getElementsByTagName("head")[0].appendChild(script);
