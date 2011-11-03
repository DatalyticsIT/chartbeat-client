var http = require('http'),
    querystring = require('querystring'),
    url = require('url');
    
/**
 * FIXME: Enter a description for the dashboard-chartbeat module
 * @module chartbeat-api
 */

/**
 * The base url that is prepended to all real-time API requests
 * @type {string}
 */
var REALTIME_URL = 'http://api.chartbeat.com';

/**
 * The base url that is prepended to all historical API requests
 * @type {string}
 */
var HISTORIC_URL = 'http://chartbeat.com/dashapi';

/**
 * Paths to different API's
 * @type {Object}
 */
var PATHS = {
    alerts:        '/alerts/',
    dataSeries:    '/data_series/',
    dayDataSeries: '/day_data_series/',
    histogram:     '/histogram/',
    pages:         '/pages/',
    pathSummary:   '/pathsummary/',
    quickstats:    '/quickstats/',
    recent:        '/recent/',
    snapshots:     '/snapshots/',
    stats:         '/stats/',
    summary:       '/summary/',
    topPages:      '/toppages/'
};

var URLS = {
    alerts:        HISTORIC_URL,
    dataSeries:    HISTORIC_URL,
    dayDataSeries: HISTORIC_URL,
    histogram:     REALTIME_URL,
    pages:         REALTIME_URL,
    pathSummary:   REALTIME_URL,
    quickstats:    REALTIME_URL,
    recent:        REALTIME_URL,
    snapshots:     HISTORIC_URL,
    stats:         HISTORIC_URL,
    summary:       REALTIME_URL,
    topPages:      REALTIME_URL
};

/**
 * FIXME: Enter a description for the DashboardChartbeat class
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
    request: function (request, params, callback) {
        if (!PATHS.hasOwnProperty(request)) {
            throw new Error("Unknown API request: " + request);
        }
        
        if (!URLS.hasOwnProperty(request)) {
            throw new Error("Unknown API request URL: " + request);
        }
        
        var url  = URLS[request],
            path = PATHS[request];
            
        if (!params) {
            params = {};
        }
        
        if (params && params.apply && params.call) {
            callback = params;
            params = {};
        }
        
        params.apikey = this.apiKey;
        
        this._makeRequest(url + path + "?" + querystring.stringify(params), callback);
    },
    
    isValidMethod: function (method) {
        return PATHS.hasOwnProperty(method) && URLS.hasOwnProperty(method);
    },
    
    /**
     * Alerts API call (Historical)
     * @see http://chartbeat.pbworks.com/alerts
     * @param {Function} callback  Function to be called once the request has completed successfully.
     * @param {Object} params  {'since' : Unix Timestamp} (REQUIRED)
     */
    alerts: function (params, callback) {
      this.request('alerts', params, callback);
    },

    /**
     * Data Series API call (Historical)
     * @see http://chartbeat.pbworks.com/data_series
     * @param {Function} callback  Function to be called once the request has completed successfully.
     * @param {Object} params  {
     *                           'days'      : Number of Days
     *                           'minutes'   : Number of Minutes
     *                           'type'      : 'path', 'ref', 'summary', 'perf
     *                           'timestamp' : Unix Timestamp,
     *                           'val'       : Specifies what to return for page, ref, and summary types
     *                         }
     */
    dataSeries: function (params, callback) {
       this.request('dataSeries', params, callback);
    },

    /**
     * Day Data Series API call (Historical)
     * @see http://chartbeat.pbworks.com/day_data_series
     * @param {Function} callback  Function to be called once the request has completed successfully.
     * @param {Object} params  {'timestamp' : Unix Timestamp, 'type': 'paths' || 'referrers'} (REQUIRED)
     */
    dayDataSeries: function (params, callback) {
       this.request('dayDataSeries', params, callback);
    },

    /**
     * Histogram API call
     * @see http://chartbeat.pbworks.com/histogram
     * @param {Function} callback  Function to be called once the request has completed successfully.
     * @param {Object} params  {
     *                           'keys'   : Commas separated list of keys (http://chartbeat.pbworks.com/Short-names),
     *                           'breaks' : How to break the histogram,
     *                           'path'   : Optional - specific path
     *                         }
     */
    histogram: function (params, callback) {
       this.request('histogram', params, callback);
    },

     /**
      * Pages API call (Real-time)
      * @see http://chartbeat.pbworks.com/pages
      * @param {Function} callback  Function that will be called once the request has successfully
      *                                      been completed. The data returned from the request will be
      *                                      passed to the callback.
      * @param {Object|undefined} params  { 'path': '/custom/path/' } (OPTIONAL)
      */
     pages: function (params, callback) {
        this.request('pages', params, callback);
     },

     /**
      * Path Summary API call (Real-time)
      * @see http://chartbeat.pbworks.com/pathsummary
      * @param {Function} callback  Function that will be called once the request has successfully
      *                                      been completed. The data returned from the request will be
      *                                      passed to the callback.
      * @param {Object} params  {
      *                            'keys': 'Comma separated list of keys' (http://chartbeat.pbworks.com/Short-names),
      *                            'types': 'n' || 's'
      *                          }
      */
     pathSummary: function (params, callback) {
        this.request('pathSummary', params, callback);
     },

     /**
      * Quickstats API call (Real-time)
      * @see http://chartbeat.pbworks.com/quickstats
      * @param {Function} callback  Function to be called once the request has completed successfully.
      * @param {Object} params  { 'path': '/custom/path/' } (OPTIONAL)
      */
     quickstats: function (params, callback) {
        this.request('quickstats', params, callback);
     },

     /**
      * Recent API call (Real-time)
      * @see http://chartbeat.pbworks.com/recent
      * @param {Function} callback  Function to be called once the request has completed successfully.
      * @param {Object} params  { 'path': '/custom/path/', limit: Number } (OPTIONAL)
      */
     recent: function (params, callback) {
        this.request('recent', params, callback);
     },

     /**
      * Snapshots API call (Historical)
      * @see http://chartbeat.pbworks.com/snapshots
      * @param {Function} callback  Function to be called once the request has completed successfully.
      * @param {Object} params  { 'timestamp': Unix Timestamp } (REQUIRED)
      */
     snapshots: function (params, callback) {
         params['api'] = 'pages';
         this.request('snapshots', params, callback);
     },

     /**
      * Stats API call (Historical)
      * @see http://chartbeat.pbworks.com/stats
      * @param {Function} callback  Function to be called once the request has completed successfully.
      */
     stats: function (callback) {
        this.request('stats', params, callback);
     },

     /**
      * Summary API call (Real-time)
      * @see http://chartbeat.pbworks.com/summary
      * @param {Function} callback  Function to be called once the request has completed successfully.
      * @param {Object} params  {
      *                             'keys': 'Comma separated list of keys',
      *                             'path': '/custom/path/'
      *                          }
      */
     summary: function (params, callback) {
        this.request('summary', params, callback);
     },

     /**
      * Top Pages API call (Real-time)
      * @see http://chartbeat.pbworks.com/toppages
      * @param {Function} callback  Function to be called once the request has completed successfully.
      * @param {Object} params  { 'limit': Number }
      */
     toppages: function (params, callback) {
        this.request('toppages', params, callback);
     },

    _makeRequest: function (request, callback) {
        var parsedUrl = url.parse(request);
        
        var options = {
            host: parsedUrl.host,
            path: parsedUrl.pathname + ((parsedUrl.search === undefined) ? '' : parsedUrl.search)
        };
        
        http.get(options, function (response) {
            var responseBody = '';
    		response.on('data', function (chunk) {
    			responseBody += chunk;
    		});
    		response.on('end', function () {
    			try {
    				var response = JSON.parse(responseBody);
    				callback.call(this, response);
    			} catch(e) {
    				callback.call(this, null);
    			}
    		});
        });
    }

};

module.exports = {
    Client: Chartbeat,
    createClient: function (cfg) {
        return new Chartbeat(cfg);
    }
};
