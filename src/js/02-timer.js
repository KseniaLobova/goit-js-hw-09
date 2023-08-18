import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from 'notiflix'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
console.log(Notify)
const input = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('button[data-start')
const day = document.querySelector('[data-days]')
const hour = document.querySelector('[data-hours]')
const minute  = document.querySelector('[data-minutes]')
const second  = document.querySelector('[data-seconds]')

startBtn.addEventListener('click', startClock)

const currentData = new Date();
let choosenData = null;
let deltaData = null;

 startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      choosenData = selectedDates[0];
      deltaData = choosenData - currentData;
      if (deltaData <= 0) {
       Notiflix.Notify.failure('Please choose a date in the future');
        startBtn.disabled = true;
    }
    if(deltaData>=0){startBtn.disabled = false;
      console.log(deltaData)}
      
  },
};

function flatpickr( selector, options) {
    console.log (flatpickr)
}
flatpickr(input, options);



function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}




function startClock() {

  const intervalId = setInterval(() => {
   
    deltaData -= 1000;
    console.log(convertMs(deltaData))
    addTimer(convertMs(deltaData));
     if (deltaData < 1000) {
       clearInterval(intervalId)
       Notiflix.Notify.info('Time is over')
  } 
  }, 1000)
  startBtn.disabled = true;


}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day)) ;
  // Remaining hours
  const hours =addLeadingZero(Math.floor((ms % day) / hour)) ;
  // Remaining minutes
  const minutes =addLeadingZero( Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second)) ;

  return { days, hours, minutes, seconds };
}

//

function addTimer({ days, hours, minutes, seconds }) {
  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;

}
