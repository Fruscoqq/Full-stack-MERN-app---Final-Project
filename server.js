const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connectong DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ msg: "Welcome to MERN Stack App" })
})

// Define Routes
app.use('/api/register', require('./routes/register'))
app.use('/api/teachers', require('./routes/teachers'))
app.use('/api/students', require('./routes/students'))
app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})