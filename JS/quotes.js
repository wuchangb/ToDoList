const quotes = [

{
    quote: "Only i can change my life, no one can do it for me.",
    author: "Carol Burnett",
},
{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelsosn Mandela",
},
{
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
},
{
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
},
{
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D.Rockefeller",
},
{
    quote: "I find that the harder i work, the more luck i seem to have.",
    author: "Thomas Jefferson",
},
{
    quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
},
{
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
},
{
    quote: "A mind troubled by doubt cannot focus on the course to victory.",
    author: "Arthur Golden",
},
{
    quote: "Whenever I hear, 'It can't be done,' I know I'm close to success.",
    author: "Michael Flatley",
},
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;