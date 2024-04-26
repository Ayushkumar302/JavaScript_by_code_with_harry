const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "Did you hear about the claustrophobic astronaut? He needed a little space.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "Parallel lines have so much in common. Its a shame theyll never meet.",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "How do you organize a space party? You planet!",
    "Why did the math book look sad? It had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "How do you make holy water? You boil the hell out of it!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don't seagulls fly over the bay? Because then they'd be bay-gulls!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I used to play piano by ear, but now I use my hands.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Did you hear about the claustrophobic astronaut? He needed a little space.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "Parallel lines have so much in common. Its a shame theyll never meet.",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "How do you organize a space party? You planet!",
    "Why did the math book look sad? It had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "How do you make holy water? You boil the hell out of it!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don't seagulls fly over the bay? Because then they'd be bay-gulls!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I used to play piano by ear, but now I use my hands.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    
];

const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
// console.log(randomJoke);

const jokeDisplayElement = document.getElementById("jokezz");
    if (jokeDisplayElement) {
        jokeDisplayElement.innerHTML = randomJoke;
    }
