const mongoose = require('mongoose');

const TopicSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  studentId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "Private"
  },
  feedback: {
    type: String,
    required: false
  },
  grade: {
    type: String,
    required: false
  },
  date: {
    type: String,
    default: Date.now
  }
})

module.exports = mongoose.model('topic', TopicSchema);

