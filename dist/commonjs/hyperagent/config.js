"use strict";
var _ = require("hyperagent/miniscore")._;

var config = {};

// Provide defaults in case we're in a browser.
if (typeof window !== 'undefined') {
  config.ajax = window.$ && window.$.ajax.bind(window.$);
  config.defer = window.Q && window.Q.defer;
  config._ = _;
  config.loadHooks = [];
}


exports.config = config;