// alert('GAME OVER')

const avatar = document.querySelector('.avatar');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');

const jump = () => {
  avatar.classList.add('jump');

  setTimeout(() => {
    avatar.classList.remove('jump');
  },500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const avatarPosition = window.getComputedStyle(avatar).bottom.replace('px','');

  if (pipePosition <= 120 && pipePosition > 0 && avatarPosition <= 80) {

    pipe.style.animation = 'none';
    pipe.style.left=`${pipePosition}px`;

    avatar.style.animation = 'none';
    avatar.style.bottom=`${avatarPosition}px`;

    avatar.src = 'images/game-over.png';
    avatar.style.width = '75px';
    avatar.style.marginLeft = '50px';

    clearInterval(loop);
  }
}, 10)

document.addEventListener('keydown', jump);