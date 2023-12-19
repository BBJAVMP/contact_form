import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/style', express.static(path.join(__dirname, 'dist', 'style')));
app.use(express.static(path.join(__dirname, 'src')));

app.use('/style', express.static(path.join(__dirname, 'style')));


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home' });
});

app.get('/', (req, res) => {
  res.render('validate', { pageTitle: 'Validate' });
});

app.get('/', (req, res) => {
  res.render('contact', { pageTitle: 'Contact Us' });
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

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
