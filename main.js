var Data = {
  timeHour: new Date().getMinutes(),
  timeMinute: new Date().getMinutes(),
  timeSeconds: new Date().getSeconds()
}

var checkToShow = window.setInterval(function() {
  var d = new Date()
  Data.timeHour = d.getHours()
  Data.timeMinute = d.getMinutes()
  Data.timeSeconds = d.getSeconds()
  document.getElementById("timeHour").innerHTML = Data.timeHour;
  document.getElementById("timeMinute").innerHTML = Data.timeMinute;
  document.getElementById("timeSeconds").innerHTML = Data.timeSeconds;
  }, 500)