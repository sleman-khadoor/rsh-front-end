// serverMiddleware.js or server/index.js

const express = require('express');
const compression = require('compression');
const { createNuxt } = require('nuxt3');

const app = express();

// Use compression middleware
app.use(compression({
  // Options: e.g., threshold, level, etc.
}));

// Initialize Nuxt
createNuxt().then(nuxt => {
  app.use(nuxt.render);
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
