var expect = require("chai").expect;
var CB = require("../src/chartbeat");

var config = {
    apiKey: "317a25eccba186e0f6b558f45214c0e7"
};
var params = {
    host: "gizmodo.com"
};
var ChartbeatClient = new CB.createClient(config);

describe("ChartbeatClient", function(){
    describe("#APIs", function() {

        /**
         *  Historical APIs
         */
        it("should execute engseries", function(done) {

            ChartbeatClient.engseries(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute engstats", function(done) {

            ChartbeatClient.engstats(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute socseries", function(done) {

            ChartbeatClient.socseries(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute socstats", function(done) {

            ChartbeatClient.socstats(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute trafseries", function(done) {

            ChartbeatClient.trafseries(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute trafstats", function(done) {

            ChartbeatClient.trafstats(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        /**
         *  Live APIs
         */
        it("should execute quickstats", function(done) {

            ChartbeatClient.quickstats(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute recent", function(done) {

            ChartbeatClient.recent(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute referrers", function(done) {

            ChartbeatClient.referrers(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute summary", function(done) {

            ChartbeatClient.summary(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute top_geo", function(done) {

            ChartbeatClient.top_geo(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });

        it("should execute toppages", function(done) {

            ChartbeatClient.toppages(params)
                .then(function(data) {
                    expect(data).to.be.not.undefined;
                    done();
                })
                .catch(function(err) {
                    done(err);
                });
        });


        it("should fail", function(done) {

            ChartbeatClient.toppages()
                .then(function(data) {
                    done(new Error());
                })
                .catch(function(err) {
                    done();
                });
        });
    });
});
