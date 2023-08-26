import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const item = "videoplayer-current-time";
const onPlay = function(data) {
    localStorage.setItem(item, data.seconds);
};
const throttleOnPlay = throttle(onPlay, 1000);
player.on('timeupdate', throttleOnPlay);

player.setCurrentTime(localStorage.getItem(item)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});