const express = require('express');
const path = require('path');

const app = express();

// Remplace 'dist/nom-de-ton-projet' par le bon chemin de ton build Angular
app.use(express.static(path.join(__dirname, 'dist/fuse')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/fuse', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Frontend Angular is running on port ${PORT}`);
});
