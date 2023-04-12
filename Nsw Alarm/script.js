const audio = new Audio("./download.mp3");

for (let i = 0; i < 60; i++) {
  mins.innerHTML = mins.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

for (let i = 0; i < 60; i++) {
  secs.innerHTML = secs.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

for (let i = 0; i < 24; i++) {
  hours.innerHTML =
    hours.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

let timer = new Date();
let year = timer.getFullYear();
let month = timer.getMonth() + 1;
let date = timer.getDate();

let rtime;
let realTime = document.getElementById("rTime");
setInterval(() => {
  rtime = new Date();
  realTime.innerHTML = rtime;
}, 1000);

function bell() {
  audio.play();
  setTimeout(() => {
    img.src = "./image/alerm.jpg";
    para.innerHTML = "🔔 Welcome to NSW Alarm ⏰";
  }, 10000);
}

const para = document.getElementById("para");
const setAlarm = document.getElementById("btn");
const img = document.getElementById("imgbox");
setAlarm.addEventListener("click", () => {
  alarmDate = new Date(
    `${year}-${month}-${date} ${hours.value}:${mins.value}:${secs.value}`
  );

  timeforAlarm = new Date();

  alarmTime = alarmDate - timeforAlarm;
  console.log(alarmTime);
  if (alarmTime >= 0) {
    alert(`Alarm set Now.`);
  } else {
    alert(`Please Enter a Valid Time.`);
  }

  if (alarmTime >= 0) {
    setTimeout(() => {
      bell();
      img.src = "./image/Monkey Puppet Waking Up Alarm.gif";
      para.innerHTML = "Good Morning Nsw!";
    }, alarmTime);
  }
});

const clearAlarm = document.getElementById("clearAlarm");

clearAlarm.addEventListener("click", () => {
  audio.pause();
  alert("Alarm Cancelled");
  img.src = "./img/clock.png";
});

const scene = document.querySelector('.scene');
const CreateDiv = () =>{
    for (let i = 0; i < 210; i++){
        scene.innerHTML += "<div></div>";
    }
}
CreateDiv();

const stars = document.querySelectorAll('div');
stars.forEach( star => {
    let x = `${Math.random() * 200}vmax`;
    let y = `${Math.random() * 100}vh`;
    let z = `${Math.random() * 200 - 100}vmin`;
    let rx = `${Math.random() * 360}deg`;
    star.style.setProperty('--x', x);
    star.style.setProperty('--y', y);
    star.style.setProperty('--z', z);
    star.style.setProperty('--rx', rx);
    let delay = `${Math.random() * 1.5}s`;
    star.style.animationDelay = delay;
})