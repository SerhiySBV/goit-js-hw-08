import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const BOX = 'videoplayer-current-time';

const playerEl = document.querySelector('#vimeo-player');

const onPlay = function (data) {
  const serializedState = JSON.stringify(data.seconds);
  localStorage.setItem(BOX, serializedState);
};
const player = new Player(playerEl);

player.on('timeupdate', throttle(onPlay, 1000));
if (localStorage.getItem(BOX)) {
  player.setCurrentTime(Number(localStorage.getItem(BOX)));
}
