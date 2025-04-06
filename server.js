const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3001;

// Serve static files from the "client/build" directory (for React production build)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch-all route for single-page applications (e.g., React)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Enable CORS for all routes
app.use(cors());

// Your existing code here
app.post('/post/image/path', (req, res) => {
    // Handle the POST request
});

app.get('/get/image/classification', (req, res) => {
    // Handle the GET request
});

app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
