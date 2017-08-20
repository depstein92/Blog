const express = require('express');
const app = express();
const parser = require('body-parser');


app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/gallery', (req, res) => {
  res.render('gallery');
})

app.listen(3000, () => {
  console.log('web server running');
})
