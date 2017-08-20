const Sequelize = require('sequelize');
var connection = new Sequelize('articles','dan','Paradise21', {
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
    defaultValue: 'at least its not null',
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    defaultValue: 'Text not loaded',
    allowNull: false
  }
}, {
timestamps: false,
});

connection.sync().then(function(){ //sync database to this page, maybe This should be put in head  |>
  const saveParams = (data, callback) => {

  Article.create({
    title: { type: Sequelize.STRING, allowNull: false},
    body: { type: Sequelize.STRING, allowNull: false},
    author: { type: Sequelize.STRING, allowNull: true},
  }).then(res => {
      callback(null, res);
    }, err => {
      callback(err);
    });
  }


});

module.exports.saveParams = saveParams;
