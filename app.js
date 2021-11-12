const express = require('express');
const app = express();
const path = require('path');
const body_parser = require('body-parser');
const {getallmessage} = require('./Controlers/allContrallers');
const PORT = 3000;


app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','hbs');

app.get('/main',(req,res)=>{
    res.render('main.hbs');
});
app.get('')
app.get('/allmessage',getallmessage);
app.post('/getMessage',(req,res)=>{

});
app.post('/writemessage',(req,res)=>{

});

app.listen(PORT,()=>{
    console.log(`server has been started ${PORT}`);
});