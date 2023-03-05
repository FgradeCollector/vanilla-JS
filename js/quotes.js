const quotes = [
    {quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author:"Albert Einstein",},
    {quote:"A room without books is like a body without a soul.",
    author:"Marcus Tullius Cicero",},
    {quote:"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author:"William W. Purkey",},
    {quote:"You only live once, but if you do it right, once is enough.",
    author:"Mae West",},
    {quote:"Be the change that you wish to see in the world.",
    author:"Mahatma Gandhi",},
    {quote:"In three words I can sum up everything I've learned about life: it goes on.",
    author:"Robert Frost",},
    {quote:"If you tell the truth, you don't have to remember anything.",
    author:"Mark Twain",},
    {quote:"A friend is someone who knows all about you and still loves you.",
    author:"Elbert Hubbard",},
    {quote:"Always forgive your enemies; nothing annoys them so much.",
    author:"Oscar Wilde",},
    {quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author:"Mahatma Gandhi",},
    {quote:"Without music, life would be a mistake.",
    author:"Friedrich Nietzsche",},
]

const quotediv = document.querySelector(".quote");
const authordiv = document.querySelector(".author");
const randomquote= quotes[Math.floor(Math.random() * quotes.length)];
quotediv.innerText = randomquote.quote;
authordiv.innerText = randomquote.author;