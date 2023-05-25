const express = require('express');
const app = express();
const path = require('path');

// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
