const player = document.querySelector('.player'); //Player
const pipe = document.querySelector('.pipe'); //Zombie
const menu = document.querySelector('.bg'); //BackGround
const contador = document.getElementById("contagem") //Contador
const contagem = 0;


//Configurando pulo
const jump = () => {
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}

// Cria a função para contar os segundos
var segundos = 0;
function ContarSegundos(){
    segundos = segundos + 1;
    contador.innerHTML = segundos;
    return segundos
}

//Cria um loop que irá rodar durante todo o jogo
function loop() {
    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');

        //Chama a função 'ContarSegundos'
        const repeticao = setTimeout(ContarSegundos(), 10)

        if (pipePosition <= 120 && pipePosition > 0 && playerPosition < 60) {

            pipe.style.animation = 'none';
            pipe.style.display = 'none'
            pipe.style.left = `${pipePosition}px`;

            player.style.bottom = `${playerPosition}px`;

            player.src = './images/game_over.png';
            player.style.width = '65px'
            player.style.marginLeft = '50px'
            player.style.bottom = '0'

            menu.style.display = 'flex'

            clearInterval(loop);
            segundos = 0;

        } 

    }, 10);
}

loop();
document.addEventListener('keydown', jump);

function refresh() {

    pipe.style.animation = 'pipe-animation 3s infinite linear';
    pipe.style.display = 'block';
    pipe.style.left = '';

    player.src = './images/p2.gif';
    player.style.width = '120px';
    player.style.bottom = '0px';

    menu.style.display = 'none';

    loop();
}