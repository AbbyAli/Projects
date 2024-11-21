// Array of Icebreaker Questions
const questions = [
    "What’s your favorite way to spend a weekend?",
    "If you could have any superpower, what would it be?",
    "What’s the last TV show or movie you watched?",
    "What’s your favorite snack or treat?",
    "If you could live in any decade, which one would it be?",
    "What’s your most-used emoji?",
    "If you were an animal, what would you be?",
    "What’s a fun fact about your name?",
    "Do you prefer coffee or tea, or neither?",
    "What’s a childhood game you loved?",
    "If you could travel anywhere in the world right now, where would you go?",
    "What’s the best trip you’ve ever taken?",
    "Have you ever traveled somewhere just for food? Where?",
    "What’s your favorite way to explore a new place?",
    "What’s the weirdest or funniest thing you’ve encountered while traveling?",
    "What’s the best piece of advice you’ve ever received?",
    "What’s a tool or app you can’t work without?",
    "Who’s a professional role model you admire?",
    "What’s the most memorable project you’ve worked on?",
    "If you could invent a work holiday, what would it celebrate?",
    "What’s a hobby you’ve picked up recently?",
    "Do you have a favorite podcast or book?",
    "If you could instantly become good at any skill, what would it be?",
    "What’s a hidden talent you have?",
    "What’s a guilty pleasure you enjoy?",
    "What’s a song that always puts you in a good mood?",
    "Who’s your favorite fictional character?",
    "What’s the best concert or live event you’ve ever attended?",
    "If you could star in any movie, what would it be?",
    "What’s a TV show you can rewatch over and over?",
    "What’s a food you absolutely can’t stand?",
    "Do you believe in aliens or ghosts?",
    "What’s the strangest thing you’ve ever eaten?",
    "If you won the lottery, what’s the first thing you’d buy?",
    "What’s your favorite holiday tradition?",
    "What’s a toy or game you loved as a kid?",
    "What was your favorite subject in school?",
    "What’s a memory that always makes you smile?",
    "What’s the first thing you ever saved up to buy?",
    "What’s a family tradition you enjoy?",
    "Would you rather travel to the past or the future?",
    "Would you rather have unlimited time or unlimited money?",
    "Would you rather have the ability to fly or to be invisible?",
    "Would you rather live by the beach or in the mountains?",
    "Would you rather read the book or watch the movie?",
    "If you could have dinner with any historical figure, who would it be?",
    "If you could instantly master another language, which one would it be?",
    "If you were a superhero, what would your catchphrase be?",
    "If you could live in any fictional universe, which one would it be?",
    "If you could swap lives with someone for a day, who would it be?"
];

const generateButton = document.getElementById("generate-btn");
const questionDisplay = document.getElementById("question");

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionDisplay.textContent = questions[randomIndex];


});
