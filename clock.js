var hoursContainer = document.querySelector(".hours");
var minutesContainer = document.querySelector(".minutes");
var tickElements = Array.from(document.querySelectorAll(".tick"));

// Create a Date object and setting it to UTC (Coordinated Universal Time) zone
var last = new Date(0);
last.setUTCHours(-1);

// Function to update the time
function updateTime() {
  var now = new Date();

  // Getting hours
  var lastHours = last.getHours().toString();
  var nowHours = now.getHours().toString();
  if (lastHours !== nowHours) {
    // update html div of hours
    updateContainer(hoursContainer, nowHours);
  }

  // Gettings minutes
  var lastMinutes = last.getMinutes().toString();
  var nowMinutes = now.getMinutes().toString();
  if (lastMinutes !== nowMinutes) {
    // updating html div of minutes
    updateContainer(minutesContainer, nowMinutes);
  }

  last = now;
}

function updateContainer(container, newTime) {
  var time = newTime.split("");

  // Put zero in front if there is the lenght is only one
  if (time.length === 1) {
    time.unshift("0");
  }

  var first = container.firstElementChild;
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0]);
  }

  var last = container.lastElementChild;
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1]);
  }
}

function updateNumber(element, number) {
  var second = element.lastElementChild.cloneNode(true);
  second.textContent = number;

  element.appendChild(second);
  element.classList.add("move");

  setTimeout(function () {
    element.classList.remove("move");
  }, 990);
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 990);
}

// update time each 100 miliseconds
setInterval(updateTime, 100);
