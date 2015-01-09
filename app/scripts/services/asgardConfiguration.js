/**
 * Created by Administrator on 2015/1/6.
 */
'use strict';

var asgard = angular.module('asgard');
asgard.provider("restServiceProvider", function(){

    this.baseUrl = 'http://restservice.com';

    this.$get = function() {
        var baseUrl = this.baseUrl;
        return {
            getBaseUrl: function() { return this.baseUrl; }
        }
    };

    this.setBaseUrl = function(url) {
        this.baseUrl = url;
    };
});