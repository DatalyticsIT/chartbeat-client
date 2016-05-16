var request = require('request'),
    querystring = require('querystring'),
    url = require('url'),
    Q = require('q');

/**
 * The base url that is prepended to all real-time API requests
 * @type {string}
 */
var BASE_URL = 'http://api.chartbeat.com/';

/**
 * Paths to different API's
 * @type {Object}
 */
var API_CONFIG = {

    /**
     * Historical APIs
     */
    engagement_series: {
        path: "historical/engagement/series/"
    },
    engagement_stats: {
        path: "historical/engagement/stats/"
    },
    social_series: {
        path: "historical/social/series/"
    },
    social_stats: {
        path: "historical/social/stats/"
    },
    traffic_series: {
        path: "historical/traffic/series/"
    },
    traffic_stats: {
        path: "historical/traffic/stats/"
    },

    /**
     * Live APIs
     */
    quickstats: {
        path: "live/quickstats/",
        versions: [ "v3", "v4" ]
    },
    recent: {
        path: "live/recent/",
        versions: [ "v3" ]
    },
    referrers: {
        path: "live/referrers/",
        versions: [ "v3" ]
    },
    summary: {
        path: "live/summary/",
        versions: [ "v3" ]
    },
    top_geo: {
        path: "live/top_geo/",
        versions: [ "v1" ]
    },
    toppages: {
        path: "live/toppages/",
        versions: [ "v3" ]
    }
};

/**
 * @class ChartbeatApi
 * @extends Widget
 * @constructor
 */
function Chartbeat(cfg) {
    this.apiKey = cfg.apiKey;
};

Chartbeat.prototype = {
    
    /**
     *
     */
    request: function (request, params, version) {
        if(!version && request.versions) {
            version = request.versions[request.versions.length-1];
        }

        var url  = BASE_URL + request.path + version;

        if (!params) {
            params = {};
        }

        params.apikey = this.apiKey;
        
        return this._makeRequest(url + "?" + querystring.stringify(params));
    },

    /**
     * Engagement Series API call (Historical)
     * @see http://support.chartbeat.com/docs/api.html#engseries
     * @param {Object} params
     * @returns {Promise} promise   returns a Promise
     */
    engseries: function (params) {
        return this.request(API_CONFIG.engagement_series, params);
    },

    /**
     * Engagement Stats API call (Historical)
     * @see http://support.chartbeat.com/docs/api.html#engstats
     * @param {Object} params
     * @returns {Promise} promise   returns a Promise
     */
    engstats: function (params) {
        return this.request(API_CONFIG.engagement_stats, params);
    },

    /**
     * Social Series API call (Historical)
     * @see http://support.chartbeat.com/docs/api.html#socseries
     * @param {Object} params
     * @returns {Promise} promise   returns a Promise
     */
    socseries: function (params) {
        return this.request(API_CONFIG.social_series, params);
    },

    /**
     * Social Stats API call (Historical)
     * @see http://support.chartbeat.com/docs/api.html#socstats
     * @param {Object} params
     * @returns {Promise} promise   returns a Promise
     */
    socstats: function (params) {
        return this.request(API_CONFIG.social_stats, params);
    },

    /**
     * Traffic Series API call (Historical)
     * @see http://support.chartbeat.com/docs/api.html#trafseries
     * @param {Object} params
     * @returns {Promise} promise   returns a Promise
     */
    trafseries: function (params) {
        return this.request(API_CONFIG.traffic_series, params);
    },

    /**
     * Traffic Stats API call (Historical)
     * @see http://support.chartbeat.com/docs/api.html#trafstats
     * @param {Object} params
     * @returns {Promise} promise   returns a Promise
     */
    trafstats: function (params) {
        return this.request(API_CONFIG.traffic_stats, params);
    },


    /**
     * QuickStats API call (Live)
     * @see http://support.chartbeat.com/docs/api.html#quickstats
     * @param {Object} params
     * @param {Object} version  If not provided the latest available version will be used
     * @returns {Promise} promise   returns a Promise
     */
    quickstats: function (params, version) {
        return this.request(API_CONFIG.quickstats, params, version);
    },

    /**
     * Recent API call (Live)
     * @see http://support.chartbeat.com/docs/api.html#recent
     * @param {Object} params
     * @param {Object} version  If not provided the latest available version will be used
     * @returns {Promise} promise   returns a Promise
     */
    recent: function (params, version) {
        return this.request(API_CONFIG.recent, params, version);
    },

    /**
     * Referrers API call (Live)
     * @see http://support.chartbeat.com/docs/api.html#referrers
     * @param {Object} params
     * @param {Object} version  If not provided the latest available version will be used
     * @returns {Promise} promise   returns a Promise
     */
    referrers: function (params, version) {
        return this.request(API_CONFIG.referrers, params, version);
    },

    /**
     * Summary API call (Live)
     * @see http://support.chartbeat.com/docs/api.html#summary
     * @param {Object} params
     * @param {Object} version  If not provided the latest available version will be used
     * @returns {Promise} promise   returns a Promise
     */
    summary: function (params, version) {
        return this.request(API_CONFIG.summary, params, version);
    },

    /**
     * Top Geo API call (Live)
     * @see http://support.chartbeat.com/docs/api.html#geo
     * @param {Object} params
     * @param {Object} version  If not provided the latest available version will be used
     * @returns {Promise} promise   returns a Promise
     */
    top_geo: function (params, version) {
        return this.request(API_CONFIG.top_geo, params, version);
    },

    /**
     * Top Pages API call (Live)
     * @see http://support.chartbeat.com/docs/api.html#toppages
     * @param {Object} params
     * @param {Object} version  If not provided the latest available version will be used
     * @returns {Promise} promise   returns a Promise
     */
    toppages: function (params, version) {
        return this.request(API_CONFIG.toppages, params, version);
    },

    _makeRequest: function (req) {
        var qdef = Q.defer();

        request(req, function (error, response, body) {
            if(error) {
                qdef.reject(error);
            } else {
                try {
                    var res = JSON.parse(body);
                    if(response.statusCode == 200) {
                        qdef.resolve(res);
                    } else {
                        qdef.reject(res);
                    }
                } catch (error) {
                    console.error("Error parsing Chartbeat response");
                    qdef.reject(error);
                }
            }
        });

        return qdef.promise;
    }

};

module.exports = {
    Client: Chartbeat,
    createClient: function (cfg) {
        return new Chartbeat(cfg);
    }
};
