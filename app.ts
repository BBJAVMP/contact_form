import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
  const { firstname, lastname, email, country, subject } = req.body;

  
  if (!isValidInput(firstname) || !isValidInput(lastname) || !isValidEmail(email)) {
    res.status(400).send('Invalid input data');
    return;
  }

  

  res.send('Form submitted successfully');
});

function isValidInput(value: string): boolean {
  
  return value.trim() !== '' && value.length >= 3;
}

function isValidEmail(email: string): boolean {
 
  return /\S+@\S+\.\S+/.test(email);
}


app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
