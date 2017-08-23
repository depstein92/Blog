const articles = require('../db/articlespg');
const expressValidator = require('express-validator');


module.exports.get = function(request, response) {
  articles.get(function(err, list) {

    if (err) {
      var message = "Problems displaying Info"
      return response.render('404', {
        message: message
      });
    }
    response.render('gallery', { //gallery
      articles: list,
      title: defaultTitle
    });
  })
}

module.exports.post = (request, res) => {
  /*id,title, body, author,showinmenu,image,description*/

  request
    .checkBody('title', 'Invalid title')
    .notEmpty()

  request
    .checkBody('body', 'Invalid body')
    .notEmpty()

  request
    .checkBody('author', 'Invalid user')
    .notEmpty()


  request
    .checkBody('image', 'Invalid image')
    .notEmpty()


  request
    .checkBody('description', 'Invalid description')
    .notEmpty()


/*.sanitizeBody('title').escape();
  .sanitizeBody('body').escape();
  .sanitizeBody('author').escape();
  .sanitizeBody('image').escape();
  .sanitizeBody('description').escape();*/


  const input = {
    title: request.body.title,
    author: request.body.author,
    image: request.body.image,
    description: request.body.description,
    url: request.body.url,
    body: request.body.body
  }



  articles.makeArticle(input, (err) => {
    if (err) {

      return res.render('gallery', { //changed from /gallery
        title: err.messege,
        author: '-------',
        body: err.messege,
        image: '-------',

       })
			 res.redirect('gallery'); //changed from /gallery

    }
  });

}
module.exports.new = function(request, response) {
	articles.getArticles().then(function(results){
		 response.render('makeArticle', { //changed here
		 articles: results.rows
	 })
	})

}
