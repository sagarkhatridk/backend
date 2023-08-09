"use strict";
const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const nodemailer = require("nodemailer");
//create a use using: POST "/api/auth/" doesn't require auth

router.post(
  "/sendmsg",

  async (req, res) => {
    const { name, email, subject, message } = req.body;

    const note = new Contact({
      name,
      email,
      subject,
      message,
    });

    const saveNote = await note.save();
    res.status(200).json(saveNote);
  }
);


router.post(
  "/sendmail",

  async (req, res) => {
    const { email } = req.body
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'dayton.zemlak@ethereal.email',
          pass: 'D91ttdNeWkkuPh9TAj'
      }
  });
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Sagar Khatri " <sagarkhatri@outlook.in>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
    
      console.log("Message sent: %s", info.messageId);
      res.send(info)
    }
    
    main().catch(console.error);
  }
);

module.exports = router;
