// 3. (2p) Totala längden av orden
// Skriv klart funktionen som räknar ut den totala längden av dom 3 orden.

function totalWordLength(word1, word2, word3) {
  return word1.length +  word2.length +  word3.length
}

const result = totalWordLength("vad", "heter", "du");
console.log("3: ", result); // Ska logga 10
