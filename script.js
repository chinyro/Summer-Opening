const countDown = () => {
	const countDate = new Date('December 31, 2024 00:00:00').getTime();
	const now = new Date().getTime();
	const gap = countDate - now;

// Calculations for Time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Calculate missing days
const finalDay = Math.floor(gap / day);
const finalHour = Math.floor((gap % day) / hour);
const finalMinute = Math.floor((gap % hour) / minute);
const finalSecond = Math.floor((gap % minute) / second);

document.querySelector('.day').innerText = finalDay;
document.querySelector('.hour').innerText = finalHour;
document.querySelector('.minute').innerText = finalMinute;
document.querySelector('.second').innerText = finalSecond;

};

setInterval(countDown, 1000);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles.js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});