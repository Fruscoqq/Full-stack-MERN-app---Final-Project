const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require("../middleware/auth");

const User = require('../models/User');
const Topic = require('../models/Topic');

// GET api/topics
// Get all user topics
// Private
router.get('/', auth, async (req, res) => {
  try {
    const topics = await Topic.find({}).sort({ date: -1 });
    res.json(topics)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})


// PUT api/topics
// Update user topics
// Private
router.put('/:id', async (req, res) => {
  const topicFields = {};
  if (req.body.studentId) topicFields.studentId = req.body.studentId;
  if (req.body.title) topicFields.title = req.body.title;
  if (req.body.topic) topicFields.topic = req.body.topic;
  if (req.body.feedback) topicFields.feedback = req.body.feedback;
  if (req.body.grade) topicFields.grade = req.body.grade;
  if (req.body.type) topicFields.type = req.body.type;

  try {
    let topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).send("Topic not found");
    }

    topic = await Topic.findByIdAndUpdate(req.params.id,
      { $set: topicFields },
      { new: true });

    res.json(topic);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

// DELETE api/topics
// Delete user topics
// Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).send("Topic not found");
    }

    await Topic.findByIdAndRemove(req.params.id);

    res.json({ msg: "Topic removed" });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;