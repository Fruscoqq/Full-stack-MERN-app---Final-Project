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
    const topics = await Topic.find({ user: req.user.id }).sort({ date: -1 });
    res.json(topics)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})


// POST api/topics
// Add new topic
// Private
router.post('/', [auth, [
  check("studentId", "Please enter your student ID").not().isEmpty(),
  check("title", "Please enter your topic title").not().isEmpty(),
  check("topic", "Please enter your topic content").not().isEmpty()
]], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const newTopic = new Topic({
      "studentId": req.body.studentId,
      "title": req.body.title,
      "topic": req.body.topic,
      "type": req.body.type,
      "feedback": req.body.feedback,
      "user": req.user.id
    })

    const topic = await newTopic.save();

    res.json(topic)

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error")
  }
})

// PUT api/topics
// Update user topics
// Private
router.put('/:id', auth, async (req, res) => {
  const topicFields = {};
  if (req.body.studentId) topicFields.studentId = req.body.studentId;
  if (req.body.title) topicFields.title = req.body.title;
  if (req.body.topic) topicFields.topic = req.body.topic;
  if (req.body.type) topicFields.type = req.body.type;
  if (req.body.feedback) topicFields.feedback = req.body.feedback;

  try {
    let topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).send("Topic not found");
    }

    // Make sure users owns that topic
    if (topic.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
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

    // Make sure users owns that topic
    if (topic.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Topic.findByIdAndRemove(req.params.id);

    res.json({ msg: "Topic Deleted" });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;

