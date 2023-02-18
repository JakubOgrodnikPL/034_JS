// const test = () => {
// 	console.log('🍔')
// }
// test()
// setTimeout(test,2000)
// setInterval(test, 4000)

// 'use strict'
// const colors = ['red','green', 'blue']
// for(let color of colors){
// 	console.log(color)
// }

// alert('Cześć')

// if (confirm('Chcesz 🍕?')){
// 	console.log('ok');
// } else{
// 	console.log('nie to nie')
// }

// prompt('Cześć, jak masz na imię?')

// console.log(Math.PI)

// const liczbaLosowa = Math.random()*10
// console.log(Math.floor(liczbaLosowa))

// const pic = document.querySelector('img')
// console.log(pic)
// pic.setAttribute('src', 'https://unsplash.it/600/400')
// pic.setAttribute('alt', 'losowy obrazek')

// const test = () => {
// 	console.log('🍔')
// }
// test()
// setTimeout(test,2000)

const liItems = document.querySelectorAll('li')
let number = 1
for(const liItem of liItems){
    liItem.textContent = number
    liItem.dataset.id = number
    number++
}

const thirdLi = document.querySelector('[data-id="3"]')
console.log(thirdLi)
console.log(thirdLi.closest('.wrapper'))