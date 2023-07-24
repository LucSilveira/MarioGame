const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const nuvens = document.querySelector('.cloud')
const contador = document.querySelector('.pontuacao')
const scoreBoard = document.querySelector('.score-board')

let contadorPulos = 0
let statusPulo = false

const jump = () => {
  mario.classList.add('jump');
  statusPulo = true
  
  setTimeout(() => {
    mario.classList.remove('jump')
    statusPulo = false
  }, 500)
}

const contarPulos = () => {
    const posicaoPipe = pipe.offsetLeft
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(posicaoPipe <= 200 && posicaoMario >= 80) {
      // Se o Mario está no chão e o cano (pipe) está à frente dele, aumente a pontuação em 1
      contadorPulos++;
    }
}

const loop = setInterval(() => {
  const posicaoPipe = pipe.offsetLeft
  const posicaoNuvens = nuvens.offsetLeft
  const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

  if(posicaoPipe <= 120 && posicaoPipe > 0 && posicaoMario < 80)
  {
    pipe.style.animation = 'none'
    pipe.style.left =  `${posicaoPipe}px` 
    
    mario.style.animation = 'none'
    mario.style.bottom = `${posicaoMario}px`
    mario.src = "./assets/imgs/game-over.png"
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    
    nuvens.style.animation = 'none'
    nuvens.style.left =  `${posicaoNuvens}px` 

    scoreBoard.style.display = 'flex'
    contador.innerHTML = `${contadorPulos}`

    clearInterval(loop)

  }

}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('keyup', contarPulos);

document.getElementById("reset").addEventListener('click', function(){
  window.location.reload()
})