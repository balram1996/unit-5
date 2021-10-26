const express = require("express");
const router = express.Router();
const sendMail = require("../utils/send-mail")

router.post("/", async (req, res) => {
  try {
    const user = User.create(req.body);
    await sendMail({
    to: "user.email", // list of receivers
    subject: "verification email", // Subject line
    text: "verification email from aas.com", // plain text body
    html: "<b>Hello world?</b>", // html body
    });
    return res.status(200).json({ user: user });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const page = req.body.page || 1;
    const size = req.body.page || 10;
    const offset = (page - 1) * size;
    const users = await User.find().skip(offset).limit(size).lean().exac();

    //if front ask us to give the total count of the pages-:
    const totalPages = Math.ceil((await User.find().countDocuments())/size); 
    return res.status(200).json({ user: user });
  } catch (err) {
    return res.status(400).json({ status: "failed", message: err.message });
  }
});

module.exports = router;
