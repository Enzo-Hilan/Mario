const player = document.querySelector('.player');
const pipe = document.querySelector('.pipe');
const menu = document.querySelector('.bg');
const contagem = 0;


const jump = () => {
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}

function loop() {
    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && playerPosition < 60) {

            pipe.style.animation = 'none';
            pipe.style.display = 'none'
            pipe.style.left = `${pipePosition}px`;

            player.style.bottom = `${playerPosition}px`;

            player.src = './images/game_over.png';
            player.style.width = '65px'
            player.style.marginLeft = '50px'

            menu.style.display = 'flex'

            clearInterval(loop);

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