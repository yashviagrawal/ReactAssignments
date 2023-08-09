const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3001; // Choose a suitable port

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Mock user data for demonstration
const users = [
  { id: 1, username: 'hirak', password: '1212' },
  { id: 2, username: 'yashvi', password: '1212' },
];

// POST route for login validation
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
