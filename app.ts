

const app = express();

app.use('/css', express.static('css'))
app.use('/ressources', express.static('ressources'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website', 'index.html'));
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
