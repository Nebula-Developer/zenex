const zenex = require('..');

var app = zenex();

var accounts = app.genAccountSystem({
    name: 'test'
});

app.createServer();
app.useStatic('test');

app.listen(3000, () => {
    console.log('Listening on port 3000');
});