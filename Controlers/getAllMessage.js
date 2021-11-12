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


module.exports =  async () => {
    try {
        await client.connect();
        let lock = await client.getMailboxLock('INBOX');
    try {
        let array = [];
         for await (let msg of client.fetch('1:*',{uid:true,envelope:true})){
            let array_address = msg.envelope.sender;
            let subject =  msg.envelope.subject;
            let msg_uid = msg.uid;
            array.push({array_address,subject,msg_uid});
         }
         return array;
    } 
    catch(e){
        console.error(e);
    }
    finally {
        lock.release();
    }

    await client.logout();
    } catch (error) {
        console.error(error);
        throw Error(error);
    }
};



