var CB = require("../src/chartbeat");

var config = {
    apiKey: "317a25eccba186e0f6b558f45214c0e7"
};

describe("CB", function(){
    describe("#quickstat", function() {

        it("should execute quickstats", function(done) {

            var ChartbeatClient = new CB.createClient(config);
            var params = {
                host: "gizmodo.com"
            };

            ChartbeatClient.quickstats(params)
                .then(function(data) {
                    done();
                })
                .catch(function(err) {
                    done();
                });
        });
    });
});
