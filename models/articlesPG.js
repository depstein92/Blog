//WILL FIX JUST TESTING IN DB FOR NOW
const pool = require('../db');

pool.query('SELECT * FROM articles WHERE id=2', (err, res) => { //Just a test to see if I am connected
  //console.log(err, res)
})

const makeArticle = (data, callback) => {
  const regex = /(&nbsp;|<([^>]+)>)/ig;
  const dataObj = [
    data.title,
    data.author,
    data.showinmenu,
    data.image,
    data.description,
    data.body.replace(regex, "").substr(0, 200)
  ]

  const sql = 'INSERT INTO articles(title, author, showinmenu, image, description, body) VALUES ($1, $2, $3, $4, $5, $6)'

  pool.query(sql, dataObj, (err, res) => {
      callback(err, res);
    debugger;
  })

}

makeArticle({
  title: 'Metallica',
  author: 'Ulfric StormCloak',
  showInMenu: false,
  image: 'none',
  description: 'Lorem ipsum blah blah',
  body: 'lorem lorem you lorem you...'
});
