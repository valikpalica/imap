const getAllMessage = require('./getAllMessage');
const getMesage = require('./getMessage');

const getallmessage = (req,res) =>{
    getAllMessage().then(data=>{
        console.log(data);
        res.json({data});
    }).catch(e=>{
        console.error(e);
        res.sendStatus(500);
    })
};



const getmessage = (req,res) =>{
    let {uid} = req.body;
    getMesage(uid).then(data=>{
        res.json({data});
    }).catch(error=>{
        console.error(error);
        res.sendStatus(500);
    });
};

const writemessage = (req,res) =>{
    
};

module.exports = {getallmessage,getnewmessage,getmessage,writemessage};





