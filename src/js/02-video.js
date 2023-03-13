import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

function getCurrentTime(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds);
}

player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);