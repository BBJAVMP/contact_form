
import express from 'express';
import path from 'path';

const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use((req, res) => {
  res.status(404).send('404 Not Found');
});


const port = 8000;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
