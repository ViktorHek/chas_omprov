// 2.1 (2p) Använd filter för att filtrera numbers och
// skapa en ny array med alla tal som är mindre än 50.
// Den nya arrayen ska sparas i en variabel som heter smallerThan50.
const numbers = [100, 54, 582, 33, 4];
let smallerThan50 = numbers.filter(el => el < 51)
console.log('2.1: ', smallerThan50)
// 2.2 (2p) Använd map på arrayen numbers2 och
// skapa en ny array där alla tal är tripplade. Alltså gånger 3.
// Den nya arrayen ska sparas i en variabel som heter tripple.
let tripple = numbers.map(el => el * 3)
console.log('2.2: ', tripple)