"use strict";

const crypto = require("crypto");
const todolist = {
  read: (req, res) => {
    res.render('index');
  },

  create: (req, res) => {
    const client = req.body;
    const index = crypto.randomBytes(20).toString("hex").slice(0,20); //token 생성
    res.status(201).send(index);
  },

  update: (req, res) => {
    const client = req.body;
    const index = req.params.index;
    return res.status(201).send(index);
  },

  delete: (req, res) => {
    const index = req.params.index;
    return res.status(201).send(index);
  },
};

module.exports = {
  todolist,
};