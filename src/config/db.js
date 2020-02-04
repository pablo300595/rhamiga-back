const mongoose = require('mongoose');
// const URI = `mongodb://localhost/rhamiga`;
const URI = `mongodb://admin:admin@cluster0-shard-00-00-6wnub.mongodb.net:27017,cluster0-shard-00-01-6wnub.mongodb.net:27017,cluster0-shard-00-02-6wnub.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
