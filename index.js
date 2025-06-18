import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Expected a string in the "data" field.' });
  }

  const sorted = data.split('').sort();
  return res.json({ word: sorted });
});


if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

  app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

}

export default app;
