'use strict';

var _ = require('underscore');

module.exports = (function() {

    var attic = function() {};

    var supported = function() {
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    };

    attic.prototype = {
        hasKey: function(key) {
            return !_.isUndefined(localStorage.getItem(key)) && !_.isEmpty(localStorage.getItem(key));
        },
        find: function(key) {
            if (this.hasKey(key)) {
                return localStorage.getItem(key).split(',');
            } else {
                return [];
            }
        },
        hasValue: function(key, value) {
            return _.contains(this.find(key), value.toString());
        },
        store: function(value, key) {
            if (this.hasKey(key)) {
                if (!this.hasValue(key, value)) {
                    var arr = this.find(key);
                    arr.push(value);
                    localStorage.setItem(key, arr.toString());
                }
            } else {
                localStorage.setItem(key, value.toString());
            }
            return localStorage.getItem(key);
        },
        clean: function(value, key) {
            var result = _.without(this.find(key), value.toString());
            localStorage.setItem(key, result.toString());
            return result;
        },
        cleanKey: function(key){
            localStorage.removeItem(key);
        }

    };

    if (supported()) {
        return attic;
    } else {
        console.log('localstorage not supported');
        return false;
    }

}());