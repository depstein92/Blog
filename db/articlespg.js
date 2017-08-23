const pg = require('pg');


const pool = new pg.Pool({
  user: 'dan',
  host: '127.0.0.1',
  database: 'Blog',
  password: 'Paradise21', //never allow password to be viewed by anyone
  port: 5432,
});

pool.connect();

const makeArticle = (data, callback) => {  /*===========MAKE ARTICLE==============*/
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
  })

}


const getArticles = (data) => { /*===============GET ARTICLES===============*/

  return pool.query('SELECT * FROM articles', null)
}

const getArticleById = function(id) {
  pool.query('select * from articles where id = $1 limit 1', [id])
    .then(res => { console.log(res.rows[0])})
    .catch(err => {console.log(err)})
  }


/*==============NEW PARTS =================*/
const get = function(callback) {
  pg.query('select * from articles', null, (err, res) => {
    if (err) {
      callback(err)
    } else {
      callback (null, res.rows)
    }
  })
}






module.exports.getArticleById = getArticleById;
module.exports.getArticles = getArticles;
module.exports.makeArticle = makeArticle;
