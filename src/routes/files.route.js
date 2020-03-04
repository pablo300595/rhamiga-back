const express = require('express');
const routerFiles = express.Router();
const { uploadFile, test } = require('./../controllers/files.controller');

routerFiles.route('/')
    .post(uploadFile)
    .get(test);

module.exports = routerFiles;