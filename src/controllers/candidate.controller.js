const Candidate = require('./../models/candidate.model');

async function getAllCandidates(req, res) {
    const candidates = await Candidate.find();
    res.json(candidates);
}

async function getCandidateById(req, res){
    const candidate = await Candidate.find({_id:req.params.id});
    res.json(candidate);
}

async function getCandidateId(req, res){
    const candidate = await Candidate.find({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        state: req.body.state,
        city: req.body.city,
        nationality: req.body.nationality
    });
    res.json(candidate[0].id);
}

async function insertCandidate(req, res) {
    const candidate = new Candidate(req.body);
    return await candidate.save().then(()=>{
        res.json({message: 'Candidate inserted succesfully!'});
    });
}

async function deleteCandidate(req, res) {
    return await Candidate.deleteOne({_id: req.params.id}).then(()=>{
        res.json({message: 'Candidate deleted succesfully!'});
    });
}

async function updateCandidateById(req, res){
    const candidate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        sex: req.body.sex,
        nationality: req.body.nationality,
        state: req.body.state,
        city: req.body.city,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        career: req.body.career,
        careerLevel: req.body.careerLevel,
        category: req.body.category,
        experience: req.body.experience,
        languages: req.body.languages,
        resume: req.body.resume,
        status: req.body.status
    };
    return await Candidate.updateOne({_id: req.params.id},{$set: candidate}, {new: true}).then(()=>{
        res.json({message: 'Candidate updated succesfully!'});
    });
}


module.exports = {
    getAllCandidates, insertCandidate, deleteCandidate, getCandidateById,
    updateCandidateById, getCandidateId
};