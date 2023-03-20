const quotes = [  {    quote: "Boil 'em, mash 'em, stick 'em in a stew.",    person: "Samwise Gamgee"  },  {    quote: "The potato, like man, was not meant to dwell alone.",    person: "A. A. Milne"  },  {    quote: "A potato expresses the earth and the sun and the rain.",    person: "Maurice Maeterlinck"  },  {    quote: "The potato is a tuberous root which thrives in darkness",    person: "Sherlock Holmes"  }];

const quoteElement = document.getElementById("quote");
const personElement = document.getElementById("person");

let index = 0;

function showQuote() {
  quoteElement.textContent = quotes[index].quote;
  personElement.textContent = "- " + quotes[index].person;
  index = (index + 1) % quotes.length;
}

setInterval(showQuote, 10000);
