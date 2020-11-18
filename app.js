
//timer function
(function () {
  var sec = 60;
  function startTimer() {
    console.log('timer supposed to go')
    var timer = setInterval(function () {
      sec--;
      document.getElementById('timerDisplay').innerHTML = '00:' + sec;
      if (sec < 0) {
        clearInterval(timer);
        alert("Time is up!")
      }
    }, 1000);
  }
  document.getElementById('incorrect').addEventListener('click', function () {
    sec -= 5;
    document.getElementById('timerDisplay').innerHTML = '00:' + sec;
  });
  startTimer();
})();