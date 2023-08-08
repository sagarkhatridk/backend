const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

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

module.exports = router;
