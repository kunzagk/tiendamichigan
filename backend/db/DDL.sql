CREATE DATABASE michigan;

\c michigan;

CREATE TABLE usuarios (
  id           SERIAL       NOT NULL,
  nombre       VARCHAR(30),
  email        VARCHAR(50)  NOT NULL   UNIQUE,
  password     VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE productos (
  id            SERIAL        NOT NULL,
  titulo        VARCHAR(30)   NOT NULL,
  img           VARCHAR(250)  NOT NULL,
  descripcion   VARCHAR(100)  NOT NULL,
  precio        VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);

