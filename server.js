const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./src/config/db');
//Routes
const routerCandidate = require('./src/routes/candidate.route');
const routerUser = require('./src/routes/user.route');

// Server settings
app.set('port',process.env.PORT||3000);
app.listen(app.get('port'),()=>{
    console.log('Server running!');
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control');
    next();
});
//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//Routing
app.use('/candidate',routerCandidate);
app.use('/user', routerUser);
