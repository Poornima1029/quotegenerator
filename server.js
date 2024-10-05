const express = require('express');
const app = express();
const port = 3000; // You can change this port if needed

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Sample quotes data
const quotes = {
  inspiration: [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
  ],
  love: [
    "Love is not only something you feel, it is something you do.",
    "Love is composed of a single soul inhabiting two bodies.",
    "To love and be loved is to feel the sun from both sides."
  ],
  life: [
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Life is what happens when you're busy making other plans.",
    "The purpose of our lives is to be happy."
  ]
};

// API endpoint to get a quote
app.get('/api/quote', (req, res) => {
  const category = req.query.category;
  const keyword = req.query.keyword;

  // Validate category
  if (!category || !quotes[category]) {
    return res.status(400).json({ error: 'Invalid or missing category.' });
  }

  // Fetch quotes from the selected category
  let categoryQuotes = quotes[category];

  // If keyword is provided, filter quotes containing the keyword
  if (keyword) {
    const lowerKeyword = keyword.toLowerCase();
    categoryQuotes = categoryQuotes.filter(quote =>
      quote.toLowerCase().includes(lowerKeyword)
    );
  }

  // If no quotes match the keyword
  if (categoryQuotes.length === 0) {
    return res.json({ quote: "No quotes found for the given keyword." });
  }

  // Select a random quote from the filtered list
  const randomQuote =
    categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];

  res.json({ quote: randomQuote });
});

// Start the server
app.listen(port, () => {
  console.log(`Quote generator app running at http://localhost:${port}`);
});
