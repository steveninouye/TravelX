'use strict';

require('@babel/polyfill');

var _path = require('path');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use('/api', _api2.default);

app.get('/', function (req, res) {
   res.json('this working');
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
   console.log('Server listening on port ' + PORT);
});