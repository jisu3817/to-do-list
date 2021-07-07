"use strict";
const crypto = require("crypto");
const { User } = require("../../models/db.js")

const todolist = {
  read: (req, res) => {
    res.render('todolist');
  },

  create: (req, res) => { 
    const user = new User(req.body);
    const index = crypto.randomBytes(20).toString("hex").slice(0,20); //token 생성
    user.id = index;
    user.save((err, userInfo) => {
      if(err) throw err;
      res.status(201).send(index);
    })
  },
 
  update: (req, res) => {
    const user = new User(req.body);
    const index = req.params.index;
    user.id = index;
    User.findOneAndUpdate({ id: index }, {name: user.name, description: user.description}, (err, userInfo) => {
      if(err) throw err;
      res.status(201).send(index);
    });
  },

  delete: (req, res) => {
    const user = new User(req.body);
    const index= req.params.index;
    User.findOneAndDelete({ id: index }, (err, results) => {
      if (err) throw err;
      res.status(201).send(index);
    });
  }
};

module.exports = {
  todolist,
};