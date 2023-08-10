const fs = require('fs')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 3001; 

app.use(bodyParser.json());
app.use(cors()); 


const users = [
  { id: 1, username: 'hirak', password: '1212' },
  { id: 2, username: 'yashvi', password: '1212' },
];


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


app.post('/submitContact', (req, res) => {
    const contactData = req.body;
  
    // Read existing data from the JSON file
    let existingData = [];
    try {
      const dataFromFile = fs.readFileSync('contactData.json', 'utf8');
      existingData = JSON.parse(dataFromFile);
    } catch (error) {
      // File might not exist yet
    }
  
    // Add new data to the existing data
    existingData.push(contactData);
  
    // Write the updated data back to the JSON file
    fs.writeFileSync('contactData.json', JSON.stringify(existingData));
  
    res.status(200).send({ message: 'Contact data saved successfully' });
  });
  