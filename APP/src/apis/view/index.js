"use strict";

const express = require("express");
const router = express.Router();

router.get("/todolist", (req, res) => {
    res.render("todolist");
  });

  module.exports = router;