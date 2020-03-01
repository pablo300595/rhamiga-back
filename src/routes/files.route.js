const express = require('express');
const routerFiles = express.Router();
const { uploadFile } = require('./../controllers/files.controller');

routerFiles.route('/')
    .post(uploadFile)

module.exports = routerFiles;