const express = require('express');
const routerCandidate = express.Router();
const {getAllCandidates, insertCandidate, deleteCandidate,
    getCandidateById, updateCandidateById, getCandidateId} = require('./../controllers/candidate.controller');

routerCandidate.route('/')
    .get(getAllCandidates)
    .post(insertCandidate);

routerCandidate.route('/:id')
    .delete(deleteCandidate)
    .get(getCandidateById)
    .put(updateCandidateById);

routerCandidate.route('/find-id')
    .post(getCandidateId);

module.exports = routerCandidate;