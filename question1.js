// 1.1 (2p) Använd forEach för att lägga ihop orden i words-arrayen till ett långt ord
// som sparas i variabeln myWord.
let myWord = "";
const words = ["web", "development", "is", "cool"];
words.forEach((el) => myWord = `${myWord}${el}`)
console.log('1.1: ', myWord); // Ska logga: "webdevelopmentiscool";

// 1.2 (2p) Använd en for-lop för att lägga ihop orden i words-arrayen till en mening
// med mellanslag mella varje ord.
let sentence = "";
words.forEach((el) => sentence = `${sentence} ${el}`)
console.log('2.2: ', sentence); // Ska logga "web development is cool";
