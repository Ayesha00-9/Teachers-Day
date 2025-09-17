const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'static' directory
app.use('/static', express.static(path.join(__dirname, 'static')));

// Serve index.html with dynamic date
app.get('/', (req, res) => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); // e.g., "September 17, 2025"
  res.sendFile(path.join(__dirname, 'index.html'), { currentDate });
});

// Handle 404 for other routes
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});