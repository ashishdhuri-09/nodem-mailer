// https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4PPwsfPof1HZXFIW7HkCBNcpEeAblipKwZVffrof-rKHf88Qpt6ewE0aV4L4vT_02TBOge0lNA2Wwz2RKlpLk_vQ7nWUA

require('dotenv').config(); // password email lapvayla dotenv

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'dhuriashish99@gmail.com',   // gmail takaycha ekade  
        pass: ''    //  pasword of mail which is declair above
    }
});

let mailOptions = {
    from: 'dhuriashish99@gmail.com',   //sender email
    to: 'dhuriashu99@gmail.com',     //jyala send karaychay  ajun lokana patvacha asel tr , takun mail takycha zala to madhe
    subject: 'just for test',
    text: 'just work'

};


transporter.sendMail(mailOptions, function(err,data){   //send mail fun call with err check
    if(err){
        console.log("error alay", err);
    }
    else{
        console.log("mail send");
    }

});
