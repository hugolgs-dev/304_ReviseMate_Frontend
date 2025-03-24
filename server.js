const express = require('express');
const path = require('path');

const app = express();

const DIST_FOLDER = path.join(__dirname, 'dist/fuse');
console.log(`Serving static files from: ${DIST_FOLDER}`);

// Sert les fichiers statiques (JS, CSS, etc.)
app.use(express.static(DIST_FOLDER));

// Redirige toutes les routes vers index.html (important pour Angular Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_FOLDER, 'index.html'));
});

// Écoute sur le port Heroku ou 8080 par défaut
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Frontend Angular is running on port ${PORT}`);
});

