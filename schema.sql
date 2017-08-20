CREATE TABLE articles (
  id serial NOT NULL PRIMARY KEY ,
  title varchar(255) NOT NULL DEFAULT '',
  author varchar(255) NOT NULL DEFAULT '',
  description varchar(255) NULL DEFAULT '',
  body text
)
