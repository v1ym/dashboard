function startTime () {
  var today = new Date();
  var h = today.getHours();
    h -=2;


  var m = today.getMinutes();
  var s = today.getSeconds();

  var weekDay = today.getDay();
  var monthDay = today.getDate();

  var ampm = "am";

  if (h < 0) {
      h = h + 24
  }

  if (h > 12) {
    h = h - 12;
    ampm = "pm";
  } else {
    ampm = "am";
  }




  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + " : " + m + " " + ampm;
  document.getElementById("date").innerHTML = today.toDateString();
  document.getElementById("test").innerHTML = screenWidth + " x " + screenHeight;

  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}



var sw = screen.width;
var sh = screen.height;

var screenWidth = sw.toString();
var screenHeight = sh.toString();


console.log(screenWidth + " x " + screenHeight);
