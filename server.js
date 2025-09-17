const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'static' directory
app.use('/static', express.static(path.join(__dirname, 'static')));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});