function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Tambahkan nol di depan angka jika hanya satu digit
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var clockDiv = document.getElementById("clock");
  clockDiv.textContent = hours + ":" + minutes + ":" + seconds;
}

// Pemanggilan fungsi displayTime setiap detik
setInterval(displayTime, 1000);
