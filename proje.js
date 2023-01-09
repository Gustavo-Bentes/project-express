const app = require('express')();

app.listen(3000, () => console.log('serve running'))

app.get('/skills', (req, res) => {
    res.send('Javascript and Node');
})
app.post('/project', (req, res) => {
    res.send("hello this is sucessfull Post Request")
});