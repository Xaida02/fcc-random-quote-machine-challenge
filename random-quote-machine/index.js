const textQuote = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
// Button
const changeQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote")


const quotesArray = [
    ["“Waste no more time arguing what a good man should be. Be One.”", "Marcus Aurelius"],
    ["“We are more often frightened than hurt; and we suffer more in imagination than in reality.”", "Seneca"],
    ["“If a man knows not which port he sails, no wind is favorable.”", "Seneca"],
    ["“If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, ‘He was ignorant of my other faults, else he would have not mentioned these alone.'”", "Epictetus"],
    ["“I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.” ", "Cato"],
    ["“What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.”", "Viktor Frankl"],
    ["“The best revenge is not to be like your enemy.”", "Marcus Aurelius"],
    ["“Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.”", "Marcus Aurelius"],
    ["“Life is very short and anxious for those who forget the past, neglect the present, and fear the future.”", "Seneca"],
    ["“First say to yourself what you would be; and then do what you have to do.”", "Epictetus"],
    ["“Curb your desire—don’t set your heart on so many things and you will get what you need.”", "Epictetus"]
];

const colors = ["#D32929", "#FACD1E", "#FFF5E6", "#E5DBB7", "#CAC198", "#7F2122", "#EECEB7", "#FF5757"];

const randomIndex = (num) => {
    return Math.floor(Math.random()*num);
}

// console.log(randomIndex)

const toggleQuote = (arr) => {
    const localIndex = randomIndex(arr.length);
    let newQuote = arr[localIndex][0];
    let newAuthor =  arr[localIndex][1];
    textQuote.textContent = newQuote;
    quoteAuthor.textContent = newAuthor;
    tweetBtn.setAttribute("href", `https://twitter.com/intent/tweet?text= ${newQuote} - ${newAuthor}`);
    document.body.style.backgroundColor = colors[randomIndex(colors.length)]
};

// toggleQuote(quotesArray);

changeQuoteBtn.addEventListener("click", function(){
    toggleQuote(quotesArray)
})

window.onload = () => {
    toggleQuote(quotesArray);
};

// window.onload = function(){  
//     
//   }

