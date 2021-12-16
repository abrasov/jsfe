const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showTime() {
  const fullDate = new Date();
  const currentTime = fullDate.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  showGreetings();
  setTimeout(showTime, 1000);
}

function showDate() {
  const fullDate = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const currentDate = fullDate.toLocaleDateString('en-En', options);
  date.textContent = currentDate;
}

const greetings = document.querySelector('.greeting');
const fullDate = new Date();
const currentHours = fullDate.getHours();

function getTimeOfDay() {
  if (currentHours < 6) {
    return 'night';
  } else if (currentHours < 12) {
    return 'morning';
  } else if (currentHours < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}

let timeOfDay = getTimeOfDay();
function showGreetings() {
  greetings.textContent = `Good ${timeOfDay},`;
}

showTime();

const username = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('username', username.value);
}
window.addEventListener('beforeunload', setLocalStorage);
username.addEventListener('mouseout', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('username')) {
    username.value = localStorage.getItem('username');
  }
}
window.addEventListener('load', getLocalStorage);