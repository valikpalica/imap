const nodemailer = require("nodemailer");

async function main() {
        
    let transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: 'nodemantest@gmail.com', 
        pass:'Romeo3177',
      },
    });
    
    let info = await transporter.sendMail({
      from: 'nodemantest@gmail.com',
      to: "programmtestandwork@gmail.com",
      subject: "Hello", 
      text: "Hello world?", 
    });
    
}
  
  main().catch(console.error);