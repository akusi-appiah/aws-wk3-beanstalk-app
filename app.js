const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public'), {
     setHeaders: (res, filePath) => {
       if (filePath.endsWith('.css')) {
         res.setHeader('Content-Type', 'text/css');
       }
     }
   }));

app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
