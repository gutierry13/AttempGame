const btn = document.querySelector('.screen1 button')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const S2Btn = document.querySelector('.screen2 button')
const responseValue = document.querySelector('.screen1 input')
const p = document.querySelector('#tryAgain')
const S2H1 = document.querySelector('.screen2 h1')
const S2P = document.querySelector('.screen2 p')
const number = Math.round(Math.random() * 10)
let result = 0
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
function attempClick(event) {
  event.preventDefault()
  result++
  S2H1.innerText = `Acertou em ${result} tentativas`
  S2P.innerText = `O número era ${number} `
  if (Number(responseValue.value) == number) {
    toggleScreen()
    responseValue.value = ''
  } else {
    p.innerText = 'Tente Novamente'
  }
  responseValue.value = ''
}
btn.addEventListener('click', attempClick)
function returnClick() {
  toggleScreen()
  location.reload()
}
S2Btn.addEventListener('click', returnClick)
