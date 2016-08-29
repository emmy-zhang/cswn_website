var express         = require('express'),
    exphbs          = require('express-handlebars'),
    path            = require('path'),
    app             = express(),
    port            = Number(process.env.PORT || 3100);

app.use('/static', express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/members', function (req, res) {
    res.render('members');
});

app.get('/events', function (req, res) {
    res.render('events');
});

app.get('/gallery', function (req, res) {
    res.render('gallery');
});

app.get('/sponsors', function (req, res) {
    res.render('sponsors');
});

app.get('/resources', function (req, res) {
    res.render('resources');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});


console.log('Listening on port ' + port);
app.listen(port);
