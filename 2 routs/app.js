const express = require('express'),
        app = express();

const host = '127.0.0.1';
const port = 3000;

app.route('/api/users')
    .get((req, res) => {res.send('get')})
    .post((req, res) => {res.send('post')})
    .put((req, res) => {res.send('put')})
    .delete((req, res) => {res.send('delete')});

app.get('/about', function (request, response) {
    response.send('<h1>О сайте</h1>');
    });
    
app.use('/contact', function (request, response) {
    response.send('<h1>Контакты</h1>');
    });
    
app.get('/', function (request, response) {
    response.send('<h1>Главная страница</h1>');
    });

app.get('/bo+k', function (request, response) {
    response.send(request.url);
    });

app.get('/bo*k', function (request, response) {
    response.send(request.url);
    });

app.get('/book(.html)?', function (request, response) {
    response.send(request.url);
    });

app.get(/.*(\.)html$/, function (request, response) {
    response.send(request.url);
    });

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));
