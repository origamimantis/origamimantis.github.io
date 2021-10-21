let nslides = null;
let slideValue = null;
let slideContent = null;

function setup_slide_control()
{
  nslides = document.getElementsByClassName("slideshow-container").length;
  slideValue = new Array(nslides).fill(0);
  slideContent = []

  for (let i = 0; i < nslides; ++i)
  {
    slideContent.push( document.getElementById("slide" + i).children )
    updateSlide(i);
  }
}

function shiftSlide(shift, slide)
{
  let x = slideContent[slide]

  slideValue[slide] = (x.length + slideValue[slide] + shift) % x.length

  updateSlide(slide);
}

function updateSlide(slide)
{
  x = slideContent[slide];

  for (let s of x)
  {
    for (let c of s.children)
      c.style.display = "none";  
  }

  for (let c of x[slideValue[slide]].children)
    c.style.display = "inline-block";  
}
