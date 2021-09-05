//This is programm for generate random predictions for random people

const predictionsData = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A feather in the hand is better than a bird in the air. (2)",
  "A fresh start will put you on your way.",
  "A friend asks only for your time not your money.",
  "A friend is a present you give yourself.",
  "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
  "A golden egg of opportunity falls into your lap this month.",
  "A good friendship is often more important than a passionate romance.",
  "A good time to finish up old tasks. (2)",
  "A hunch is creativity trying to tell you something.",
  "A lifetime friend shall soon be made.",
  "A lifetime of happiness lies ahead of you.",
  "A light heart carries you through all the hard times.",
  "A new perspective will come with the new year. (2)",
  "A person is never to (sic) old to learn. (2)",
  "A person of words and not deeds is like a garden full of weeds.",
  "A pleasant surprise is waiting for you.",
  "A short pencil is usually better than a long memory any day.",
  "A small donation is call for. It’s the right thing to do.",
  "A smile is your personal welcome mat.",
  "A smooth long journey! Great expectations.",
  "A soft voice may be awfully persuasive.",
  "A truly rich life contains love and art in abundance.",
  "Accept something that you cannot change, and you will feel better.",
  "Adventure can be real happiness.",
  "Advice is like kissing. It costs nothing and is a pleasant thing to do. (2)",
  "Advice, when most needed, is least heeded.",
  "All the effort you are making will ultimately pay off.",
  "All the troubles you have will pass away very quickly.",
  "All will go well with your new project.",
];

const forWhatPerson = [
  "me",
  "my bestfriend",
  "my girlfriend",
  "my father",
  "my mother",
];

const chooseOneOf = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};

const fullPrediction = () => {
  return `Prediction for ${chooseOneOf(forWhatPerson)}: ${chooseOneOf(
    predictionsData
  )}`;
};

console.log(fullPrediction());
