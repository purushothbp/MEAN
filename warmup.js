const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/employee', (req, res) => {
  const employeeData = {
    message: 'Welcome',
    employee: {
      firstName: 'Raju',
      lastName: 'R',
      id: '678978',
    },
  };
  res.json(employeeData);
});

app.post('/welcome', (req, res) => {
  const { firstName } = req.body;
  const welcomeMessage = `Welcome ${firstName}`;
  res.json({ message: welcomeMessage });
});

app.listen(port, () => {
  console.log('Server is running on port', port);
});
