const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showTime() {
  const fullDate = new Date();
  const currentTime = fullDate.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
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

showTime();
