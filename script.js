// Brainrot Dictionary
const brainrotDictionary = {
    // Social Media & Internet Culture
    "FR": "For Real - Used to emphasize truthfulness",
    "GYATT": "Expression of excitement or shock, especially when seeing an attractive person",
    "NO CAP": "No lie, I'm being serious",
    "SUSSY": "Short for suspicious, popularized by Among Us",
    "UWU": "A cute/ironic face used in chats, expressing happiness or affection",
    "STAN": "To be a fan of someone or something, from Eminem's song",
    
    // Behavior & Lifestyle
    "GOBLIN MODE": "Slothful or self-indulgent behavior with no concern for social norms",
    "GRINDSET": "Mindset focused on constant effort and hard work to achieve success",
    "LOOKSMAXXING": "Trend encouraging young men to enhance their appearance",
    "SPIRALING": "A rapid decline in a person's emotional state",
    "SIMP": "Someone excessively attentive or adoring toward another person",
    
    // Dance & Entertainment
    "HITTING THE GRIDDY": "Doing a dance move created by Allen Davis that went viral on TikTok",
    "SLAPS": "Describes something that's exceptionally good or impactful",
    
    // Food & Culture
    "FANUM TAX": "Theft of food between friends, popularized by streamer Fanum",
    "GOATED WITH THE SAUCE": "Refers to being the greatest of all time (GOAT)",
    
    // General Terms
    "GASSY": "Full of hot air, idle talk, or empty chat",
    "GOOFY AHH": "Describes something or someone that's silly or foolish",
    "SHLAWG": "To criticize or disapprove of someone or something in a nasty way",
    "SKIBIDI": "Can mean good, cool, bad, evil, or dumb depending on context",
    
    // Crypto Terms
    "WAGMI": "We're All Gonna Make It - Crypto optimism",
    "NGMI": "Not Gonna Make It - Crypto pessimism",
    "DYOR": "Do Your Own Research - Crypto advice",
    "FUD": "Fear, Uncertainty, Doubt - Negative market sentiment",
    "HODL": "Hold On for Dear Life - Long-term holding strategy",
    "MOON": "Rapid price increase",
    "REKT": "Wrecked - Suffered heavy losses",
    "WHALE": "Large holder of cryptocurrency",
    "PAPERHANDS": "Someone who sells at the first sign of trouble",
    "DIAMONDHANDS": "Someone who holds through market volatility",
    "FOMO": "Fear Of Missing Out - Buying due to price increase",
    "SHILL": "Promoting a cryptocurrency aggressively",
    "BAGHOLDER": "Someone holding worthless assets",
    "PUMP": "Artificial price increase",
    "DUMP": "Sudden price decrease",
    "APY": "Annual Percentage Yield - Returns on staking",
    "DEFI": "Decentralized Finance",
    "NFT": "Non-Fungible Token",
    "DAO": "Decentralized Autonomous Organization",
    "GAS": "Transaction fee on Ethereum",
    // Extra Brainrot Words
    "BET": "Used to confirm plans or say 'okay' or 'deal'",
    "MID": "Something that's mediocre or average",
    "RIZZ": "Charisma, ability to attract others",
    "SLAY": "To do something exceptionally well",
    "YEET": "To throw something with force or excitement",
    "CAP": "A lie or false statement",
    "DRIP": "Stylish or fashionable appearance",
    "SUS": "Short for suspicious",
    "L + RATIO": "Mocking someone for a perceived loss or failure",
    "BRUH": "Expression of disbelief or frustration",
    "FAM": "Close friends or group",
    "FLEX": "To show off",
    "W": "Win, something good",
    "L": "Loss, something bad",
    "BOP": "A really good song",
    "VIBE CHECK": "Assessing the mood or energy of a person or place",
    "ZOOMER": "Gen Z person",
    "BOOMER": "Older person, often out of touch",
    "CHEUGY": "Out of date, trying too hard",
    "NOOB": "Newbie, inexperienced person",
    "BASED": "Unapologetically true to oneself",
    "CRINGE": "Embarrassing or awkward",
    "SKRRT": "Sound of tires screeching, used to indicate a quick exit or change",
    // Fill missing letters
    "VIBE": "The mood or feeling of a place, person, or thing",
    "XANNY": "Slang for Xanax, often used in meme/rap culture",
    "YASS": "An enthusiastic yes, often used in celebration",
    "ZOOMIES": "A sudden burst of energy, often used for pets but also for people"
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const generateButton = document.getElementById('generateButton');
const wordResult = document.getElementById('wordResult');
const wordDefinition = document.getElementById('wordDefinition');
const suggestionsContainer = document.getElementById('suggestions');

// Track last 5 generated words
const recentWords = [];
const MAX_RECENT_WORDS = 5;

// Search functionality
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toUpperCase();
    if (brainrotDictionary[searchTerm]) {
        wordResult.textContent = searchTerm;
        wordDefinition.textContent = brainrotDictionary[searchTerm];
    } else {
        wordResult.textContent = "Word not found!";
        wordDefinition.textContent = "Try another term or generate a random word.";
    }
});

// Generate random word
generateButton.addEventListener('click', () => {
    const words = Object.keys(brainrotDictionary);
    let randomWord;
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loops
    
    // Keep generating until we get a word not in recent history
    do {
        randomWord = words[Math.floor(Math.random() * words.length)];
        attempts++;
        
        // If we've tried too many times, clear the recent words history
        if (attempts >= maxAttempts) {
            recentWords.length = 0;
            break;
        }
    } while (recentWords.includes(randomWord) && words.length > MAX_RECENT_WORDS);
    
    // Add the new word to recent words
    recentWords.unshift(randomWord);
    
    // Keep only the last MAX_RECENT_WORDS words
    if (recentWords.length > MAX_RECENT_WORDS) {
        recentWords.pop();
    }
    
    wordResult.textContent = randomWord;
    wordDefinition.textContent = brainrotDictionary[randomWord];
});

// Allow Enter key to trigger search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Add some fun animations
const buttons = document.querySelectorAll('.pixel-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

// Suggestion functionality
searchInput.addEventListener('input', () => {
    const value = searchInput.value.trim().toUpperCase();
    if (!value) {
        suggestionsContainer.style.display = 'none';
        suggestionsContainer.innerHTML = '';
        return;
    }
    const matches = Object.keys(brainrotDictionary).filter(word => word.startsWith(value));
    if (matches.length === 0) {
        suggestionsContainer.style.display = 'none';
        suggestionsContainer.innerHTML = '';
        return;
    }
    suggestionsContainer.innerHTML = matches.map(word => `<div class="suggestion-item">${word}</div>`).join('');
    suggestionsContainer.style.display = 'block';
});

// Click on suggestion
suggestionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggestion-item')) {
        searchInput.value = e.target.textContent;
        suggestionsContainer.style.display = 'none';
        searchButton.click();
    }
});

// Hide suggestions on blur (with a slight delay for click)
searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        suggestionsContainer.style.display = 'none';
    }, 150);
});

// Keyboard navigation for suggestions
let suggestionIndex = -1;
searchInput.addEventListener('keydown', (e) => {
    const items = suggestionsContainer.querySelectorAll('.suggestion-item');
    if (!items.length) return;
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        suggestionIndex = (suggestionIndex + 1) % items.length;
        items.forEach((item, i) => item.classList.toggle('active', i === suggestionIndex));
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        suggestionIndex = (suggestionIndex - 1 + items.length) % items.length;
        items.forEach((item, i) => item.classList.toggle('active', i === suggestionIndex));
    } else if (e.key === 'Enter' && suggestionIndex >= 0) {
        e.preventDefault();
        searchInput.value = items[suggestionIndex].textContent;
        suggestionsContainer.style.display = 'none';
        searchButton.click();
        suggestionIndex = -1;
    } else {
        suggestionIndex = -1;
    }
}); 