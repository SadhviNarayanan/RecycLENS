const express = require('express');
const path = require('path');
const app = express();
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
