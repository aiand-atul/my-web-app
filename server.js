const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Web App</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }
        .container {
          padding: 2rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }
        h1 { font-size: 3rem; margin-bottom: 0.5rem; }
        p { font-size: 1.25rem; opacity: 0.9; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from Build.io!</h1>
        <p>This web app is running on the Build platform.</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
