// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

// Set port
app.set('port', (process.env.PORT || 4000));
// Views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // use either jade or ejs       
// Instruct express to server up static assets
app.use(express.static('public'));
// Set routes
app.get('/', function(req, res) {
  res.render('index');
});
// Main
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});