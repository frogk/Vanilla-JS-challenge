const quotes = [
    {
      quote: "Never try to catch two frogs with one hand.",
      author: "Chinese Proverb.",
    },
    {
      quote: "A frog in a well cannot conceive of the ocean.",
      author: "Zhuangzi",
    },
    {
      quote: "Don’t be a fish; be a frog. Swim in the water and jump when you hit the ground.",
      author: "Kim Young-Ha.",
    },
    {
      quote: "I’d kiss a frog even if there was no promise of a Prince Charming popping out of it. I love frogs.",
      author: "Cameron Diaz.",
    },
    {
      quote: "Theories pass. The frog remains.",
      author: "Jean Rostand.",
    },
    {
      quote: "Everybody loves listening to frog calls.",
      author: "Charles Carlson",
    },
    {
      quote: "“The frog started to loosen last week and shed during the gallop.",
      author: "Richard Mandella.",
    },
    {
      quote: "If you are a mouse don’t follow frogs.",
      author: "Italian Proverb",
    },
    {
      quote: "Though you seat the frog on a golden stool, he’ll soon jump off again into the pool.",
      author: "German Proverb",
    },
    {
      quote: "The hasty hand catches frogs for fish.",
      author: "Arab Proverb.",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todayQuote.quote;
  author.innerText = todayQuote.author;
  