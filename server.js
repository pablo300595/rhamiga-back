const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./src/config/db');
const cors = require('cors')
//Routes
const routerCandidate = require('./src/routes/candidate.route');
const routerUser = require('./src/routes/user.route');
const routerSession = require('./src/routes/session.route');
const routerFiles = require('./src/routes/files.route');

// Server settings
app.set('port',process.env.PORT||3000);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, cache-control');
    next();
});
app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, cache-control');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
//Routing
app.use('/candidate',routerCandidate);
app.use('/user', routerUser);
app.use('/session', routerSession);
app.use('/files', routerFiles);
//server
app.listen(app.get('port'),()=>{
    console.log('Served started at port '+app.get('port'));
});