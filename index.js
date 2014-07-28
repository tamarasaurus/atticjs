'use strict';

var _ = require('underscore');

module.exports = (function() {

	var attic = function(prefix) {
		this.prefix = prefix;
	};

	attic.prototype = {
        supported: function(){
            var test = 'test';
            try {
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                return false;
            }
        },
		get_key: function(key) {
			// get a key from storage
		},
		get_value: function(key, value) {
			// find a value in the key
		},
		store_key: function(key, value) {
			// store a key value pair
		},
		remove_value: function(key, value) {
			// remove a value from the key
		},
		remove_key: function(key) {
            // remove a key from localstorage
		},
		empty: function() {
			// remove all keys with the set prefix
		}

	};

    if(attic.supported()){
        return attic;
    }else{
        console.log('localstorage not supported');
        return false;
    }

}());