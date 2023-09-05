const getRandomNumber = time => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.ceil(Math.random() * 1000)
    setTimeout(() => {
      resolve(randomNumber)
    }, time)
  })
}

Promise.all([getRandomNumber(2000), getRandomNumber(4000)]).then(numbers => {
  numbers.forEach(number => console.log(number))
})
