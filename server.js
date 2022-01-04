const express = require('express');
const req = require('express/lib/request');
const app = express();
const nodemailer = require("nodemailer");

const PORT =  process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/public/contactform.html')
})
app.post('/',(req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "matewsdummy@gmail.com",
            pass: "dummymates01"
        }
    })


const mailOptions = {
    from: req.body.email,
    // Sender email address bellow 
    to: "harshshashwat18@gmail.com",
    subject: 'Message from ' + req.body.email+ ': ' + req.body.subject +'',
    text: req.body.msg + '\n Email: '+ req.body.email +'\n name: ' + req.body.name+'\n Mobile number: '+ req.body.mno+''
}

transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
        console.log(error);
        res.send('error');
    }else{
        console.log("Email sent: "+ info.response);
        res.send('success');
    }
})
})

app.listen(PORT, ()=>{
    console.log('Server running on port '+ PORT)
})