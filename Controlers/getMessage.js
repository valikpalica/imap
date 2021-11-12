const { ImapFlow } = require('imapflow');
const simpleParser = require('mailparser').simpleParser;

const client = new ImapFlow({
    host:'imap.gmail.com',
    port: 993,
    secure:true,
    tls:true,
    auth:{
        user:'programmtestandwork@gmail.com',
        pass:'Scaffold',
    },
});


module.exports = async (uid) =>{
    try {
        await client.connect();
        let lock = await client.getMailboxLock();
        try {
            let msg = await client.fetchOne(uid,{uid:true, source: true },{uid:true});
            console.log(`msg uid = ${msg.uid}`);
            let parsed = await simpleParser(msg.source);
            let name_from = parsed.from.value[0].name;
            let address_from = parsed.from.value[0].address;
            let text = parsed.text;
            return {uid:msg.uid,name_from,address_from,text};
        } finally {
            lock.release();
        }
    } catch (error) {
        throw Error(error);
    }    
};