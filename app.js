"use strict";

const express = require('express');
const app = express();

const PORT = 3000;

const indexRouter = require('./APP/src/routes');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/src/public`));

app.use('/', indexRouter);

module.exports = app;
