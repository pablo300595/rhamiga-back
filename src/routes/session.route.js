const express = require('express');
const routerSession = express.Router();
const { getAllSessions, getSession, insertSession,
    updateSession, deleteSession} = require('./../controllers/session.controller');

routerSession.route('/')
    .get(getAllSessions)
    .post(insertSession);

routerSession.route('/:id')
    .get(getSession)
    .put(updateSession)
    .delete(deleteSession)


module.exports = routerSession;