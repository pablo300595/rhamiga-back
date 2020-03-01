const Client = require('ftp');
const FTPCONFIG = {
    host: "files.000webhost.com",
    port: 21,
    user: "novaresidencia", 
    password: "2g8v-obf3-grq2",
};

async function uploadFile(req, res){ 
    let client = new Client();
    client.connect(FTPCONFIG);
    client.on('ready', ()=>{
        client.mkdir('candidates/candidate1', ()=> {
            res.json({msg: `Folder has been created!`});
        })
    });
}

module.exports = {
    uploadFile
};
