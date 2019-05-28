var date, hours, minutes, seconds, animate;

function init() {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  clock();
};

function clock() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
      if (hours == 24) {
        hours = 0;
      }
    }
  }
  $('sec', seconds);
  $('min', minutes);
  $('hr', hours);
  animate = setTimeout(clock, 1000);
};

function $(id, val) {
  if (val < 10) {
    val = '0' + val;
  }
  document.getElementById(id).innerHTML = val;
};

window.onload = init;
