const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hamrogarden1@gmail.com",
    pass: "pandavs6969",
  },
});

let mailOptions = {
  from: "hamrogarden1@gmail.com",
  to: "rochakbhusal10@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (err)=>{
    if(err){
        console.log("it has error", err);
    }
    else{
        console.log("email has been send")
    }
})

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

module.exports = {nodemailer}