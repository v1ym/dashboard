function startTime () {
  var today = new Date();

  //pi timezone difference (4 hours behind)(15 seconds behind)
  today.setTime(today - (1000*60*60*4)-(1000*15));

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  var weekDay = today.getDay();
  var monthDay = today.getDate();
  var ampm = "am";

  //24 Time
  if (h == 12) {
    ampm = "pm";
  }
  else if (h == 0) {
    h+=12;
  } else if (h < 0) {
    h+= 24;
    ampm = "pm";
  } else if (h > 12) {
    h-=12;
    ampm = "pm";
  }

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + " : " + m + " " + ampm;
  document.getElementById("date").innerHTML = today.toDateString();
  var t = setTimeout(startTime, 500);
} //end:function startTime()

//ensures 2 digits for numbers under 10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//screenheight stuff
  var sw = screen.width;
  var sh = screen.height;
  var screenWidth = sw.toString();
  var screenHeight = sh.toString();
  console.log(screenWidth + " x " + screenHeight);
