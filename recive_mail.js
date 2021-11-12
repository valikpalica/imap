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

const main = async () => {
    
    await client.connect();

   
     let lock = await client.getMailboxLock('INBOX');
    try {

        let message = await client.fetchOne('106', {uid:true, source: true },{uid:true});

        console.log(`msg uid ${message.uid}`);
        
        let parsed = await simpleParser(message.source);

        console.log('------------------------------------');
        // console.log(parsed);
        // console.log(parsed.from);
        let name_from = parsed.from.value[0].name;
        let address_from = parsed.from.value[0].address;
        console.log(`${name_from} send your email from ${address_from}`);
        console.log(`Subject ${parsed.subject}`);
        console.log(`Text ${parsed.text}`);

        console.log('------------------------------------');

    } finally {
    
        lock.release();
    }

    await client.logout();
};

main().catch(err => console.error(err));