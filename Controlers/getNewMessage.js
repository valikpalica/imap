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

module.exports = async () =>{
    try {
        await client.connect();
        let lock  =  await client.getMailboxLock('INBOX');
        let array = [];
        for(let msg of client.fetch({new:true})){
            
        }
    } catch (error) {
       
    }
};