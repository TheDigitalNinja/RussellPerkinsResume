var express = require('express');
var app = express();
var path = require('path');

// Set port
app.set('port', (process.env.PORT || 4000));

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Static Assets
app.use(express.static('public'));

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

// Main
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
