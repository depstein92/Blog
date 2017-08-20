const Sequelize = require('sequelize');
var connection = new Sequelize('articles', 'username', 'password', { //not sure if it will fix errors?
  dialect: 'postgres'
});


const Article =  connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    defaultValue: 'No title',
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    defaultValue: 'Text not loaded',
    allowNull: false
  }
}); //could throw error

connection.sync().then(function(){ //sync database to this page, maybe This should be put in head  |>
  Article.create({
    title: 'demo title',
    body: 'Lorem ipsum dolor sit amet',
    author: { type: Sequelize.STRING, allowNull: true},
  })
  Article.findById(3).then((article) => {
    console.log(article.dataValues);
  });

})

module.exports = Article;
