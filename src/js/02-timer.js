import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"

const dataTimePicker = document.querySelector('input[type="text"]')
const startBtn = document.querySelector('[data-start]')
const daysQuantity = document.querySelector('[data-days]')
const hoursQuantity = document.querySelector('[data-hours]')
const minutesQuantity = document.querySelector('[data-minutes]')
const secondsQuantity = document.querySelector('[data-seconds]')


startBtn.setAttribute('disabled', true)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
          window.alert("Please choose a date in the future")
          return
      }
      const choosenDate = selectedDates[0].getTime()
      startBtn.removeAttribute('disabled', true)
      function timer() {
          const currentDate = Date.now()
          const intervalId = setInterval(() => {
              const delta = choosenDate - currentDate
              const timeComp = convertMs(delta)
              console.log(timeComp)
              if (timeComp <= choosenDate) {
                  clearInterval(intervalId)
                  return
              }
          }, 1000)
      }
      startBtn.addEventListener('click', timer)
  },
};

flatpickr(dataTimePicker, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    daysQuantity.textContent = days
    hoursQuantity.textContent = hours
    minutesQuantity.textContent = minutes
    secondsQuantity.textContent = seconds

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}


// console.log(convertMs(Date.now()))