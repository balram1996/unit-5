//this is the utility foler where the reusable code are-:

const transporter = require("../configs/mail");
// send mail with defined transport object

module.exports = async ({to,subject,text,html}) => {
  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
};
