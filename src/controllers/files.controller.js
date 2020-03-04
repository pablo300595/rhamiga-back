const Client = require('ftp');
const formidable = require('formidable');
const fs = require('fs');

const FTPCONFIG = {
    host: "files.000webhost.com",
    port: 21,
    user: "novaresidencia",
    password: "2g8v-obf3-grq2",
};

let filedata = '';

async function uploadFile(req, res) {
    // Process Form Data
    const form = formidable({
        multiples: true
    });
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        } else {
            // FTP Connection
            let client = new Client();
            client.connect(FTPCONFIG);
            client.on('ready', () => {
                client.mkdir(`candidates/${req.query.username}`, (err) => {
                    if(err){
                        console.log(err);    
                    }
                })
                client.mkdir(`candidates/${req.query.username}/curriculum`, (err) => {
                    if(err){
                        console.log(err);    
                    }
                });
                let data = fs.readFileSync(files.file.path);

                client.put(data, `/candidates/${req.query.username}/curriculum/curriculum.pdf`, (err) => {
                    if (err) {
                        console.log(err);
                        res.json({
                            message: 'Error, the forlder does not exist'
                        });
                    } else{
                        client.end(); 
                        res.json({
                            message: 'The file has been succesfuly uploaded!'
                        });
                    }
                });

            }); //---------------------Ready-Function
        }
    }); //--------------Form-Parse-END---------------
}

async function test(req, res) {
    await res.json({
        msg: 'Testing Done'
    })
}

module.exports = {
    uploadFile,
    test
};