import React from 'react';

let ms = 0, s = 0, timer;

const Stopwatch = () => {
  return (<div className="stopwatch">0.00 s</div>)
}

const timeStart = () => {
  timer = setInterval(run, 10);
}

const timeStop = () => {
  clearInterval(timer);
  let stopwatch = document.querySelector('.stopwatch');
  stopwatch.textContent = "0.00 s";
  ms = 0;
  s = 0;
}

const run = () => {
  
  let stopwatch = document.querySelector('.stopwatch');
  stopwatch.textContent = s + "." + ms + " s";
  ms++;
  if (ms === 100) {
      ms = 0;
      s++;
  }
}

export { Stopwatch, timeStart, timeStop };