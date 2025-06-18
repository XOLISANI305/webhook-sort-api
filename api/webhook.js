export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  try {
    const { data } = req.body;

    if (typeof data !== 'string') {
      return res.status(400).json({ error: 'Invalid data format. "data" must be a string.' });
    }

    const sortedArray = data.split('').sort();

    return res.status(200).json({ word: sortedArray });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}
