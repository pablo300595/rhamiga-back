const express = require('express');
const app = express();
const bodyparser = require('body-parser');

// Server settings
app.set('port',process.env.PORT||3000);
app.listen(app.get('port'),()=>{
    console.log('Server running!');
});

