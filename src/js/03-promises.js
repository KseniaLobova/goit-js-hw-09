import Notiflix from 'notiflix'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
console.log(Notify)

const form = document.querySelector('.form');
const delay = document.querySelector('[name = "delay"]')
const step = document.querySelector('[name = "step"]')
const amount = document.querySelector('[name = "amount"]')

form.addEventListener('submit', onFormSubmit);







function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      // const result = { position, delay }
      if (shouldResolve) {
        // Fulfil
        resolve({ position, delay })
      }
      else {
        // Reject
        reject({ position, delay })
      }
    }, delay);
  });
 
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const delayVal =parseInt(delay.value) ;
  const stepVal =parseInt(step.value) ;
  console.log(stepVal)
 const amountVal = parseInt(amount.value);

  let currentDelay = delayVal;
  for (let i = 1; i <= amountVal; i += 1){
   
    createPromise(i, currentDelay)
  .then(({ position, delay }) => {
   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  });
   currentDelay+=stepVal
  }

}




     