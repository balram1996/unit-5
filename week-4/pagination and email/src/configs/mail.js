const nodemailer = require("nodemailer")
//sending email logic--
module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "82df66f88cad56", // generated ethereal user
      pass: "c29c41b9b4763e", // generated ethereal password
    },
  });