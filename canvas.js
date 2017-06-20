var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.lineWidth=10;
ctx.strokeStyle="#ffffff";

for (var i = 0; i <=1000; i += 50) {
  ctx.moveTo(i,0);
  ctx.lineTo(i,600);
  ctx.stroke();
}

for (var n = 0; n <= 1000; n += 50) {
  ctx.moveTo(0, n);
  ctx.lineTo(1000, n);
  ctx.stroke();

}
