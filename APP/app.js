"use strict";

const express = require('express');
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/src/public`));

const indexRouter = require('./src/routes');

app.use('/', indexRouter);

module.exports = app;
