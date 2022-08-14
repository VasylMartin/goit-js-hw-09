import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelayInput = document.querySelector('[name = "delay"]')
const delayStepInput = document.querySelector('[name = "step"]')
const amountInput = document.querySelector('[name = "amount"]')
const submitBtn = document.querySelector('[type = submit]')
const formEl = document.querySelector('form');


let firstDelayValue = 0;
let stepValue = 0;
let amountValue = 0;

formEl.addEventListener('input', onFormInput);

function onFormInput(e) {
  firstDelayValue = firstDelayInput.value;
  stepValue = delayStepInput.value;
  amountValue = amountInput.value;
}


submitBtn.addEventListener('click', onSubmitClick);

function onSubmitClick(e) {
  e.preventDefault();

  if ((amountValue == 0) || (amountValue < 0)){
    Notify.failure('Amount must be more then 0 and input must not be blank');
    return
  }
  callCreatePromises(firstDelayValue, stepValue, amountValue);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {

    if(shouldResolve){
       resolve(`Fulfilled promise ${position} in ${delay}ms`)
    }
    else {
      reject(`Rejected promise ${position} in ${delay}ms`)
    }
  
  });
}

function callCreatePromises(firstDelay, step, amount) {
  let counter = 1
  let timing = Number(firstDelay);

  setTimeout(() => {    
      createPromise(counter, firstDelay)
      .then(resolve => {  Notify.success(resolve); console.log(resolve)} )
      .catch(error => { Notify.failure(error); console.log(error) });
    
    if(amount >= 2) {

        const timerId2 = setInterval(() => {
          counter += 1;
          timing += Number(step);

          if(counter > amount) {
            clearInterval(timerId2);
            return
          }
          createPromise(counter, timing)
          .then(resolve => {  Notify.success(resolve); console.log(resolve)} )
          .catch(error => { Notify.failure(error); console.log(error)});
    
        }, step)
      
      }

    }, firstDelay)
}
