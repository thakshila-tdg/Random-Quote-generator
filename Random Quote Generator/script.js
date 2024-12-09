const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Everything you can imagine is real. – Pablo Picasso",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Don't wait. The time will never be just right. – Napoleon Hill",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Everything you've ever wanted is on the other side of fear. – George Addair",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Your limitation—it’s only your imagination. – Unknown",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "Great things never come from comfort zones. – Unknown",
    "Dream it. Wish it. Do it. – Unknown",
    "Success doesn’t just find you. You have to go out and get it. – Unknown",
    "The harder you work, the luckier you get. – Gary Player",
    "Don’t stop when you’re tired. Stop when you’re done. – Unknown",
    "Wake up with determination. Go to bed with satisfaction. – Unknown",
    "Little things make big days. – Unknown"













];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
