// document.getElementById('generate-btn').addEventListener('click', async () => {
//     const category = document.getElementById('category').value;
//     const keyword = document.getElementById('keyword').value;
  
//     try {
//       const response = await fetch(`/api/quote?category=${encodeURIComponent(category)}&keyword=${encodeURIComponent(keyword)}`);
//       const data = await response.json();
  
//       if (data.quote) {
//         document.getElementById('quote').innerText = data.quote;
//       } else {
//         document.getElementById('quote').innerText = "No quote found.";
//       }
//     } catch (error) {
//       console.error('Error fetching quote:', error);
//       document.getElementById('quote').innerText = "An error occurred. Please try again.";
//     }
//   });
  const quotes = {
    inspiration: [
        "The only way to do great work is to love what you do.",
        "Stay hungry, stay foolish.",
        "Believe you can and you're halfway there."
    ],
    life: [
        "Life is what happens when you're busy making other plans.",
        "Get busy living or get busy dying.",
        "In three words I can sum up everything I've learned about life: it goes on."
    ],
    success: [
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts."
    ],
    love: [
        "Love all, trust a few, do wrong to none.",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "The best thing to hold onto in life is each other."
    ],
    happiness: [
        "Happiness is not something ready made. It comes from your own actions.",
        "For every minute you are angry you lose sixty seconds of happiness.",
        "Happiness depends upon ourselves."
    ],
    motivation: [
        "Your time is limited, don’t waste it living someone else’s life.",
        "Don't watch the clock; do what it does. Keep going.",
        "If you want to achieve greatness stop asking for permission."
    ]
};

document.getElementById('generate').addEventListener('click', function() {
    const category = document.getElementById('category').value;
    const keyword = document.getElementById('keyword').value.toLowerCase();
    let selectedQuotes = quotes[category];
    
    if (keyword) {
        selectedQuotes = selectedQuotes.filter(quote => quote.toLowerCase().includes(keyword));
    }
    
    const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)] || "No matching quotes found.";
    document.getElementById('quote').innerText = randomQuote;
});
