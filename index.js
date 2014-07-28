'use strict';

var _ = require('underscore');

module.exports = (function() {

    var attic = function(prefix) {
        this.prefix = prefix;
    };

    attic.prototype = {
        store: function() {

        },
        remove: function(){

        },
        clean: function(){

        },
        empty: function(){

        }

    };
    return attic;
}());