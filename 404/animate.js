
can = document.getElementById("canvas")
can.width = document.body.clientWidth + 8
can.height = document.body.clientHeight + 8

ctx = can.getContext("2d")


stuff = new Set()


function flyingcircle(x,y)
{
  this.x = x;
  this.y = y;
  let angle = 2*Math.PI*Math.random();
  this.dx = Math.cos(angle);
  this.dy = Math.sin(angle);
  this.v = 0.001 + 0.004*Math.random();
  this.r = 0.005+0.045*Math.random();
  this.update = () =>
  {
    this.x += this.v*this.dx
    this.y += this.v*this.dy
    if (this.x < -this.r-0.1 || this.x > 1+this.r+0.1 || this.y < -this.r-0.1 || this.y > 1+this.r+0.1)
      stuff.delete(this)
  },
  this.draw = (can, ctx) =>
  {
    ctx.beginPath();
    ctx.arc(this.x*can.width, this.y*can.height, this.r*Math.min(can.width, can.height), 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'green';
    ctx.stroke();
  }

}


let curx = can.width/2;
let cury = can.height/2
let ADDING = false;

function mainloop()
{
  requestAnimationFrame(() => {this.mainloop()});

  if (ADDING)
    stuff.add(new flyingcircle(curx/can.width, cury/can.height))

  if (stuff.size > 0)
  {
    ctx.clearRect(0, 0, can.width, can.height);

    stuff.forEach( o => 
    {
      o.update()
      o.draw(can, ctx)
    });
  }
  console.log(stuff.size)
}

document.onmousemove = (e) =>
{
  curx = e.clientX;
  cury = e.clientY;
}

document.onmousedown = (e) =>
{
  ADDING = true;
}
document.onmouseup = (e) =>
{
  ADDING = false;
}

mainloop()
