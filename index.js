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
		str: function(val) {
			return JSON.stringify(val);
		},
		parseVal: function(val) {
			return JSON.parse(val);
		},
		hasKey: function(key) {
			return !_.isUndefined(localStorage.getItem(key)) && !_.isEmpty(localStorage.getItem(key));
		},
		find: function(key) {
			if (this.hasKey(key)) {
				return this.parseVal(localStorage.getItem(key));
			} else {
				return null;
			}
		},
		hasValue: function(key, value) {
			return _.contains(this.find(key), this.str(value));
		},
		store: function(value, key) {
			if (this.hasKey(key)) {
				if (!this.hasValue(key, value)) {
					var arr = this.find(key);
					arr.push(this.str(value));
					localStorage.setItem(key, this.str(arr));
				}
			} else {
				localStorage.setItem(key, this.str([this.str(value)]));
			}
			return localStorage.getItem(key);
		},
		clean: function(value, key) {
			var result = _.without(this.find(key), this.str(value));
			localStorage.setItem(key, JSON.stringify(result));
			return result;
		},
		cleanKey: function(key) {
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