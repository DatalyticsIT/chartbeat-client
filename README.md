# chartbeat-client [![npm version](https://badge.fury.io/js/chartbeat-client.svg)](https://badge.fury.io/js/chartbeat-client) [![Build Status](https://travis-ci.org/DatalyticsIT/chartbeat-client.svg?branch=master)](https://travis-ci.org/DatalyticsIT/chartbeat-client)

> A node.js wrapper for the [Chartbeat API](https://chartbeat.com/docs/api/).

## Install

Install dot-filter using [npm](https://www.npmjs.com/)

```sh
$ npm install chartbeat-client --save
```

## Usage

Import the library with require and initialize the client with your apiKey:

```js
var CB = require("chartbeat-client");

var ChartbeatClient = new CB.createClient({
  apiKey: "317a25eccba186e0f6b558f45214c0e7"
});
```

Then call the available APIs passing to it the required parameters:

```js
var params = {
    host: "gizmodo.com"
};

ChartbeatClient.quickstats(params)
    .then(function(data) {
        // do something
    })
    .catch(function(err) {
        // something went wrong
    });
```

## Available APIs

### Historical

#### [Engagement Series](http://support.chartbeat.com/docs/api.html#engseries)
```
ChartbeatClient.engseries(params)
```

#### [Engagement Stats](http://support.chartbeat.com/docs/api.html#engstats)
```
ChartbeatClient.engstats(params)
```

#### [Social Series](http://support.chartbeat.com/docs/api.html#socseries)
```
ChartbeatClient.socseries(params)
```

#### [Social Stats](http://support.chartbeat.com/docs/api.html#socstats)
```
ChartbeatClient.socstats(params)
```

#### [Traffic Series](http://support.chartbeat.com/docs/api.html#trafseries)
```
ChartbeatClient.trafseries(params)
```

#### [Traffic Stats](http://support.chartbeat.com/docs/api.html#trafstats)
```
ChartbeatClient.trafstats(params)
```

### Live

For the Live APIs you can pass a version as second parameter, otherwise the latest available version will be used.

#### [QuickStats](http://support.chartbeat.com/docs/api.html#quickstats)
Versions: v3, v4
```
ChartbeatClient.quickstats(params, version)
```

#### [Recent Visitors](http://support.chartbeat.com/docs/api.html#recent)
Versions: v3
```
ChartbeatClient.recent(params, version)
```

#### [Referrers](http://support.chartbeat.com/docs/api.html#referrers)
Versions: v3
```
ChartbeatClient.referrers(params, version)
```

#### [Summary](http://support.chartbeat.com/docs/api.html#summary)
Versions: v3
```
ChartbeatClient.summary(params, version)
```

#### [Top Geo](http://support.chartbeat.com/docs/api.html#geo)
Versions: v1
```
ChartbeatClient.top_geo(params, version)
```

#### [Top Pages](http://support.chartbeat.com/docs/api.html#toppages)
Versions: v3
```
ChartbeatClient.toppages(params, version)
```



Developed By
--------

Enrico Candino - www.enricocandino.it

<a href="https://twitter.com/enrichmann">
  <img alt="Follow me on Twitter"
       src="http://icons.iconarchive.com/icons/danleech/simple/96/twitter-icon.png" />
</a>
<a href="https://plus.google.com/+EnricoCandino">
  <img alt="Follow me on Google+"
       src="http://icons.iconarchive.com/icons/danleech/simple/96/google-plus-icon.png" />
</a>
<a href="https://it.linkedin.com/in/enrico-candino-78995553">
  <img alt="Follow me on LinkedIn"
       src="http://icons.iconarchive.com/icons/danleech/simple/96/linkedin-icon.png" />
</a>


Forked from: [node-chartbeat](https://github.com/sheknows/node-chartbeat)

License
--------

    The MIT License (MIT)
    
    Copyright (c) 2015 Enrico Candino
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.