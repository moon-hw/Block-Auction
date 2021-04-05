const express = require('express');
const asyncify = require('express-asyncify');
const asyncRouter = asyncify(express.Router());

const {
    DB,
    ERRORS,
    firebaseAdmin,
    tokenExporter,
  }=require("./commons");