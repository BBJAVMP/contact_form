// Import required modules
import express from 'express';
import path from 'path';

// Create an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
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
