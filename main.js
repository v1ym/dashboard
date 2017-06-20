function startTime () {
  var today = new Date();
  var h = today.getHours();

  var m = today.getMinutes();
  var s = today.getSeconds();

  var weekDay = today.getDay();
  var monthDay = today.getDate();

  var ampm = "am";

  h -=4; //Time change for Pi dashboard

//24 Time
  if (h>= 12) {
    ampm = "pm";
  } else {
    ampm = "am";
  }

  if (h > 16) {
    h -= 12;
  } elseif( h < 1) {
    h += 24;
  }

  if (h>= 12) {
    ampm = "pm";
  } else {
    ampm = "am";
  }

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + " : " + m + " " + ampm;
  document.getElementById("date").innerHTML = today.toDateString();

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
