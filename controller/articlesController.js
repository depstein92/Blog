const articles = require('../db/articlespg');



module.exports.get = function(request, response) {
	articles.get(function(err, list) {

		if (err) {
      var message = "Problems displaying Info"
			return response.render('404', {message: message});
		}
		response.render('test', {articles: list, title: defaultTitle});
	})
}

module.exports.post = (req,res) => {
/*id,title, body, author,showinmenu,image,description*/

	req
	  .checkBody('title', 'Invalid title')
    .notEmpty()
		.sanitizeBody('title').escape();
  req
    .checkBody('body', 'Invalid body')
		.notEmpty()
    .sanitizeBody('body').escape();
  req
    .checkBody('author', 'Invalid user')
		.notEmpty()
		.sanitizeBody('author').escape();

  req
    .checkBody('image', 'Invalid image')
		.notEmpty()
		.sanitizeBody('image').escape();

  req
    .checkBody('description', 'Invalid description')
		.notEmpty()
		.sanitizeBody('description').escape();



		const input = {
					title: request.body.title,

					author: request.body.author, //??
					image: request.body.image,
					description: request.body.description,
					url: request.body.url,
					body: request.body.body
				}



articles.makeArticle(input, (err) => {
	if(err){
		return res.render('/test', {
			title: err.messege,
			author: '-------',
			body: err.messege,
      image: '-------',

		})
	}
});

}
module.export.addChild = () => {}


// module.exports.show = function(request, response) {
// 		const id = request.params.id;
//
// 	articles.getArticleById(parseInt(id), function(err, article) {
// 		if (err) {
// 			const message = err.errno === -2 ? defaultMessage : 'Try again later';
// 			return response.render('404', {message: message, title: defaultTitle}) ;
// 		}
//
// 		if (!article || article.length === 0) {
// 			return response.render('404', {message: defaultMessage, title: defaultTitle});
// 		}
//
// 		response.render('article', {
// 				article: article,
// 				title: article.title
// 		});
// 	})
// }
