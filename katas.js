//? Ejercicio 1
// let myFavoriteHero = hulk
// console.log(myFavoriteHero)

// let x = 50
// console.log(x)

// let h = 5
// let y = 10
// let z = h + y
// console.log(z) //15

//? Ejercicio 2
//* 1
// const character = { name: 'Jack Sparrow', age: 10 }
// character.age = 250
// console.log(character.age) //250

//* 1.2
// let FirstName = 'Jon'
// let LastName = 'Snow'
// let age = 24
// let sentence =
//  'Soy ' +
//  FirstName +
//  ' ' +
//  LastName +
//  ', tengo ' +
//  age +
//  ' años y me gustan los lobos'
// console.log(sentence) //Soy Jon Snow, tengo 24 años y me gustan los lobos

//* 1.3
// const toy1 = { name: 'Buss myYear', price: 19 }
// const toy2 = { name: 'Rallo mcKing', price: 29 }
// const sumaDePrecios = toy1.price + toy2.price
// console.log(sumaDePrecios) //48

//* 1.4
// let globalBasePrice = 10000
// const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
// const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }
// globalBasePrice = 25000
// console.log(globalBasePrice)
// car1.finalPrice = car1.basePrice + globalBasePrice
// car2.finalPrice = car2.basePrice + globalBasePrice
// console.log(car1) //{ name: 'BMW m&m', basePrice: 50000, finalPrice: 75000 }
// console.log(car2) //{ name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 95000 }

//? Ejercicio 3
//* 1.1
// let resultado = 10 * 5
// console.log(resultado) //50

//* 1.2
// let resultado = 10 / 2
// console.log(resultado) //5

//* 1.3
// const resto = 15 % 9
// console.log(resto) //6

//* 1.4
// let p = 10
// let j = 5
// let o = p + j
// console.log(o) //15

//*  1.5
// let c = 10
// let m = 5
// let i = c * m
// console.log(i) //50

//? Ejercicio 4
//* 1.1
// const avengers = ['hulk', 'spiderman', 'blackpanther']
// const hulk = avengers[0]
// console.log(hulk) //"hulk"

//* 1.2
// let avengers = ['hulk', 'spiderman', 'blackpantner']
// avengers[0] = 'ironman'
// console.log(avengers) //['ironman', 'spiderman', 'blackpantner']

//* 1.3
// const avengers = ['hulk', 'spiderman', 'blackpanther']
// const numElementos = avengers.length
// console.log(numElementos) //3

//* 1.4
// let rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
// rickAndMortyCharacters.push('Morty', 'Summer')
// console.log(rickAndMortyCharacters) //[ 'Rick', 'Beth', 'Jerry', 'Morty', 'Summer' ]
// const ultimoPersonaje =
//  rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
// console.log(ultimoPersonaje) //Summer

//* 1.5
// const rickAndMortyCharacters = [
//  'Rick',
//  'Beth',
//  'Jerry',
//  'Morty',
//  'Summer',
//  'Lapiz Lopez'
// ]
// const elementoEliminado = rickAndMortyCharacters.pop()
// console.log(elementoEliminado) //Lapiz Lopez
// const primerElemento = rickAndMortyCharacters[0]
// const ultimoElemento = rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
// console.log(primerElemento) //"Rick"
// console.log(ultimoElemento) //"Summer"

//* 1.6
// let rickAndMortyCharacters = [
//  'Rick',
//  'Beth',
//  'Jerry',
//  'Morty',
//  'Summer',
//  'Lapiz Lopez'
// ]
// rickAndMortyCharacters.splice(1, 1)
// console.log(rickAndMortyCharacters) //[ 'Rick', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez' ]

//? Ejercicio 5
// const number1 = 10
// const number2 = 20
// const number3 = 2

// if (number2 / number1 == 2) {
//  console.log('number2 dividido entre number1 es igual a 2') // number2 dividido entre number1 es igual a 2
// }

// if (number1 !== number2) {
//  console.log('number1 es estrictamente distinto a number2') // number1 es estrictamente distinto a number2
// }

// if (number3 != number1) {
//  console.log('number3 es distinto number1') // number3 es distinto number1
// }

// if (number3 * 5 == number1) {
//  console.log('number3 por 5 es igual a number1') // number3 por 5 es igual a number1
// }

// if (number3 * 5 == number1 && number1 * 2 == number2) {
//  console.log(
//   'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
//  ) // number3 por 5 es igual a number1 Y number1 por 2 es igual a number2
// }

// if (number2 / 2 == number1 || number1 / 5 == number3) {
//  console.log(
//   'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
//  ) // number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3
// }

//? Ejercicio 6
//* 1.1
// for (let i = 0; i <= 9; i++) {
//  console.log(i)
//  // 0
//  // 1
//  // 2
//  // 3
//  // 4
//  // 5
//  // 6
//  // 7
//  // 8
//  // 9
// }

//* 1.2
// for (let i = 0; i <= 9; i++) {
//  if (i % 2 === 0) {
//   console.log(i)
//  // } 0
//  // 2
//  // 4
//  // 6
//  // 8
// }

//* 1.3
// for (let i = 1; i <= 10; i++) {
//  if (i === 10) {
//   console.log('Dormido!')
//  } else {
//   console.log('Intentando dormir 🐑')
//  }
// //  Intentando dormir 🐑
// // Intentando dormir 🐑
// // Intentando dormir 🐑
// // Intentando dormir 🐑
// // Intentando dormir 🐑
// // Intentando dormir 🐑
// // Intentando dormir 🐑
// // Intentando dormir 🐑
// // Intentando dormir 🐑
// // Dormido!
// }

//? Ejercicio 7
// function sum(numberOne, numberTwo) {
//  if (numberOne > numberTwo) {
//   return numberOne
//  } else {
//   return numberTwo
//  }
// }
// console.log(sum(10, 5)) // 10
// console.log(sum(3, 8)) // 8

//? Ejercicio 8
// const avengers = [
//  'Hulk',
//  'Thor',
//  'IronMan',
//  'Captain A.',
//  'Spiderman',
//  'Captain M.'
// ]
// function findLongestWord(param) {
//  let longestWord = ''
//  for (let word of param) {
//   if (word.length > longestWord.length) {
//    longestWord = word
//   }
//  }
//  return longestWord
// }

// console.log(findLongestWord(avengers)) //Captain A.

//? Ejercicio 9
// const numbers = [1, 2, 3, 5, 45, 37, 58]
// function sumAll(param) {
//  let sum = 0
//  for (let num of param) {
//   sum = sum + num
//  }
//  return sum
// }
// console.log(sumAll(numbers)) // 151

//? Ejercicio 10
// const numbers = [12, 21, 38, 5, 45, 37, 6]
// function average(param) {
//  let sum = 0
//  for (let num of param) {
//   sum = sum + num
//  }
//  let average = sum / param.length
//  return average
// }
// console.log(average(numbers)) //23.428571428571427

//? Ejercicio 11
// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
// function averageWord(param) {
//  let sum = 0
//  let count = 0
//  for (let element of param) {
//   if (typeof element === 'number') {
//    sum = sum + element
//    count++
//   } else if (typeof element === 'string') {
//    sum = sum + element.length
//    count++
//   }
//  }
//  if (count === 0) {
//   return 0
//  }
//  let average = sum / count
//  return average
// }
// console.log(averageWord(mixedElements)) // 4.555555555555555

//? Ejercicio 12
// const duplicates = [
//  'sushi',
//  'pizza',
//  'burger',
//  'potatoe',
//  'pasta',
//  'ice-cream',
//  'pizza',
//  'chicken',
//  'onion rings',
//  'pasta',
//  'soda'
// ]
// function removeDuplicates(param) {
//  let uniqueElements = {}
//  let result = []
//  for (let element of param) {
//   if (!uniqueElements[element]) {
//    result.push(element)
//    uniqueElements[element] = true
//   }
//  }
//  return result
// }
// console.log(removeDuplicates(duplicates))
// 'sushi',   'pizza',
// 'burger',  'potatoe',
// 'pasta',   'ice-cream',
// 'chicken', 'onion rings',
// 'soda'

//? Ejercicio 13
// const nameFinder = [
//  'Peter',
//  'Steve',
//  'Tony',
//  'Natasha',
//  'Clint',
//  'Logan',
//  'Xabier',
//  'Bruce',
//  'Peggy',
//  'Jessica',
//  'Marc'
// ]
// function finderName(param, name) {
//  let position = 0
//  for (let element of param) {
//   if (element === name) {
//    return { found: true, position: position }
//   }
//   position++
//  }
//  return { found: false, position: -1 }
// }

// console.log(finderName(nameFinder, 'Jessica')) //{ found: true, position: 9 }
// console.log(finderName(nameFinder, 'Yancy')) //{ found: false, position: -1 }

//? Ejercicio 14
// const counterWords = [
//  'code',
//  'repeat',
//  'eat',
//  'sleep',
//  'code',
//  'enjoy',
//  'sleep',
//  'code',
//  'enjoy',
//  'upgrade',
//  'code'
// ]
// function repeatCounter(param) {
//  let wordCounts = {}
//  for (let word of param) {
//   if (wordCounts[word]) {
//    wordCounts[word]++
//   } else {
//    wordCounts[word] = 1
//   }
//  }
//  return wordCounts
// }
// console.log(repeatCounter(counterWords)) //{ code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }

//? Ejercicio 15
// const products = [
//  'Camiseta de Pokemon',
//  'Pantalón coquinero',
//  'Gorra de gansta',
//  'Camiseta de Basket',
//  'Cinrurón de Orión',
//  'AC/DC Camiseta'
// ]

// function findCamisetas(param) {
//  for (let product of param) {
//   if (product.includes('Camiseta')) {
//    console.log(product)
//   }
//  }
// }
// findCamisetas(products)
// Camiseta de Pokemon
// Camiseta de Basket
// AC/DC Camiseta

//? Ejercicio 16
// const placesToTravel = [
//  'Japon',
//  'Venecia',
//  'Murcia',
//  'Santander',
//  'Filipinas',
//  'Madagascar'
// ]

// for (let destination of placesToTravel) {
//  console.log(destination)
// }
// Japon
// Venecia
// Murcia
// Santander
// Filipinas
// Madagascar

//? Ejercicio 17
// const alien = {
//  name: 'Wormuck',
//  race: 'Cucusumusu',
//  planet: 'Eden',
//  weight: '259kg'
// }

// for (let properties in alien) {
//  console.log(properties + ': ' + alien[properties])
// }
// name: Wormuck
// race: Cucusumusu
// planet: Eden
// weight: 259kg

//? Ejercicio 18
// const placesToTravel = [
//  { id: 5, name: 'Japan' },
//  { id: 11, name: 'Venecia' },
//  { id: 23, name: 'Murcia' },
//  { id: 40, name: 'Santander' },
//  { id: 44, name: 'Filipinas' },
//  { id: 59, name: 'Madagascar' }
// ]
// let eliminatePlaces = []
// for (let i = 0; i < placesToTravel.length; i++) {
//  let place = placesToTravel[i]
//  if (place.id !== 11 && place.id !== 40) {
//   eliminatePlaces.push(place)
//  }
// }
// console.log(eliminatePlaces)
// [
//  { id: 5, name: 'Japan' },
//  { id: 23, name: 'Murcia' },
//  { id: 44, name: 'Filipinas' },
//  { id: 59, name: 'Madagascar' }
// ]

//? Ejercicio 19
// const toys = [
//  { id: 5, name: 'Buzz MyYear' },
//  { id: 11, name: 'Action Woman' },
//  { id: 23, name: 'Barbie Man' },
//  { id: 40, name: 'El gato con Guantes' },
//  { id: 40, name: 'El gato felix' }
// ]

// let eliminateToys = []
// for (let i = 0; i < toys.length; i++) {
//  if (toys[i].name.includes('gato')) {
//   continue
//  }
//  eliminateToys.push(toys[i])
// }
// console.log(eliminateToys)
// [
//  { id: 5, name: 'Buzz MyYear' },
//  { id: 11, name: 'Action Woman' },
//  { id: 23, name: 'Barbie Man' }
// ]

//? Ejercicio 20
// const popularToys = []
// const toys = [
//  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
//  { id: 11, name: 'Action Woman', sellCount: 24 },
//  { id: 23, name: 'Barbie Man', sellCount: 15 },
//  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
//  { id: 40, name: 'El gato felix', sellCount: 35 }
// ]
// for (let toy of toys) {
//  if (toy.sellCount > 15) {
//   popularToys.push(toy)
//  }
// }
// console.log(popularToys)
// [
//  { id: 11, name: 'Action Woman', sellCount: 24 },
//  { id: 40, name: 'El gato felix', sellCount: 35 }
// ]

//? Ejercicio 21
// const users = [
//  { name: 'Tony', years: 43 },
//  { name: 'Peter', years: 18 },
//  { name: 'Natasha', years: 14 },
//  { name: 'Bruce', years: 32 },
//  { name: 'Khamala', years: 16 }
// ]
// console.log('Underage users')
// for (let user of users) {
//  if (user.years < 18) {
//   console.log(user.name)
//  }
// }

// console.log('User legal age')
// for (let user of users) {
//  if (user.years >= 18) {
//   console.log(user.name)
//  }
// }
// Underage users
// Natasha
// Khamala
// User legal age
// Tony
// Peter
// Bruce

//? Ejercicio 22
// const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
// const foodSchedule = [
//  { name: 'Heura', isVegan: true },
//  { name: 'Salmon', isVegan: false },
//  { name: 'Tofu', isVegan: true },
//  { name: 'Burger', isVegan: false },
//  { name: 'Rice', isVegan: true },
//  { name: 'Pasta', isVegan: true }
// ]
// let replaceSchedule = []
// for (let food of foodSchedule) {
//  if (!food.isVegan) {
//   for (let fruit of fruits) {
//    if (!replaceSchedule.includes(fruit)) {
//     replaceSchedule.push(fruit)
//     break
//    }
//   }
//  } else {
//   replaceSchedule.push(food.name)
//  }
// }
// console.log(replaceSchedule)
// [ 'Heura', 'Strawberry', 'Tofu', 'Banana', 'Rice', 'Pasta' ]

//? Ejercicio 23
// const movies = [
//  { name: 'Titan A.E.', durationInMinutes: 130 },
//  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
//  { name: 'Inception', durationInMinutes: 165 },
//  { name: 'The Lord of the Rings', durationInMinutes: 967 },
//  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
//  { name: 'Terminator', durationInMinutes: 140 }
// ]

// let smallMovies = []
// let mediumMovies = []
// let largeMovies = []

// for (let movie of movies) {
//  if (movie.durationInMinutes <= 100) {
//   smallMovies.push(movie)
//  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
//   mediumMovies.push(movie)
//  } else {
//   largeMovies.push(movie)
//  }
// }
// console.log('Pelis pequeñas:', smallMovies)
// console.log('Pelis medianas:', mediumMovies)
// console.log('Pelis grandes:', largeMovies)
// Pelis pequeñas: []
// Pelis medianas: [
//   { name: 'Titan A.E.', durationInMinutes: 130 },
//   { name: 'Inception', durationInMinutes: 165 },
//   { name: 'Terminator', durationInMinutes: 140 }
// ]
// Pelis grandes: [
//   { name: 'Nightmare before Christmas', durationInMinutes:
//  225 },
//   { name: 'The Lord of the Rings', durationInMinutes: 967 },
//   { name: 'Star Wars: A New Hope', durationInMinutes: 214 }
// ]

//? Ejercicio 24
// const products = [
//  { name: 'Funko Dr. Strange', sellCount: 10 },
//  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
//  { name: 'Sable laser FX', sellCount: 23 },
//  { name: 'Varita de Voldemort', sellCount: 6 }
// ]
// let totalSales = 0
// for (let product of products) {
//  totalSales += product.sellCount
// }

// console.log('Total de venta:', totalSales) //Total de venta: 341

//? Ejercicio 25
// const products = [
//  { name: 'Funko Dr. Strange', sellCount: 10 },
//  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
//  { name: 'Sable laser FX', sellCount: 23 },
//  { name: 'Varita de Voldemort', sellCount: 6 }
// ]

// let totalSales = 0
// for (let product of products) {
//  totalSales += product.sellCount
// }
// let averageSales = totalSales / products.length
// console.log('Venta total', totalSales)
// console.log('media', averageSales)
// Venta total 341
// media 85.25

//? Ejercicio 26
// const goodProducts = []
// const badProducts = []
// const products = [
//  { name: 'Funko Dr. Strange', sellCount: 10 },
//  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
//  { name: 'Sable laser FX', sellCount: 23 },
//  { name: 'Varita de Voldemort', sellCount: 6 }
// ]

// for (let product of products) {
//  if (product.sellCount > 20) {
//   goodProducts.push(product)
//  } else {
//   badProducts.push(product)
//  }
// }
// console.log('With more than 20 sales', goodProducts)
// console.log('With less than 20 sales', badProducts)
// With more than 20 sales [
//  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
//  { name: 'Sable laser FX', sellCount: 23 }
// ]
// With less than 20 sales [
//  { name: 'Funko Dr. Strange', sellCount: 10 },
//  { name: 'Varita de Voldemort', sellCount: 6 }
//  ]

//? Reto coding Operadores Logicos
// let planet = 'tierra'
// let isInnerPlanet = true
// let hasAtmosphere = true
// let isHabitable = isInnerPlanet && hasAtmosphere

// console.log(isHabitable)
