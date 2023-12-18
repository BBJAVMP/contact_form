import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'src')));

app.use(express.static(path.join(__dirname, 'style', 'css')));

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.post('/submit', (req, res) => {
  const { firstname, lastname, email, country, subject } = req.body;

  if (
    !isValidInput(firstname, 50) ||
    !isValidInput(lastname, 50) ||
    !isValidEmail(email) ||
    !isValidInput(subject, 300)
  ) {
    res.status(400).send('Invalid input data');
    return;
  }

 res.send('Form submitted successfully');
});

function isValidInput(value: string, maxLength: number): boolean {
  return value.trim() !== '' && value.length >= 3 && value.length <= maxLength;
}

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}
