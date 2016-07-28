var Async = require('./async');

Async.waterfall([
    function (cb) {
        console.log('run one');
        setTimeout(function () {
            cb(null, 'one');
        }, 1000);
    }, function (data, cb) {
        console.log('task ' + data + ' finished! ' + 'run two');
        setTimeout(function () {
            cb(null, 'two');
        }, 100);
    }, function (data, cb) {
        console.log('task ' + data + ' finished! ' + 'run three');
        setTimeout(function () {
            cb(null, 'three');
        }, 500);
    }
], function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log("result:"+res);
    }
});
