const quotes=[
    {
        quote:"The greatest discovery of my generation is that man can alter his life simply by altering his attitude of minde",
        author:"Willim james",
    },
    {
        quote:"It is kind of fun to do the impossible",
        author:"Walt Disney",
    },
    {
        quote:"The way to get started is to quit talking and begin doing",
        author:"Walt Disney",
    },
    {
        quote:"Tyranny cannot defeat the power of ideas",
        author:"Helen Keller",
    },
    {
        quote:"Keep your face to the sunshine and you cannot see the shadow",
        author:"Helen Keller",
    },
    {
        quote:"Never band your head. Hold it high. Look the world straight in the eye",
        author:"Helen Keller",
    },
    {
        quote:"A timid person is frightened before a danger, a coward during the time, and a courageous person afterward",
        author:"Jean Paul Richter",
    },
  

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];



quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;