// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och antal pizzor och returnerar det totala priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr

const pizzas = [
  {name: "hawaii", prize: 80 },
  {name: "peperoni", prize: 90 },
  {name: "vegetarian", prize: 85 },
]

function pizzaPrice(pizza, amount) {
  let target = pizzas.filter(el => el.name === pizza)
  if(!target.length) return 'invalid name'
  if(!Number.isInteger(amount)) return 'not valid amount'
  return target[0].prize * amount
}

console.log('8: ', pizzaPrice('hawaii', 3))