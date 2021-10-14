
let nslides = document.getElementsByClassName("slideshow-container").length;
let slideIndex = new Array(nslides).fill(1);

console.log(nslides)
for (let i = 0; i < nslides; ++i)
  showSlides(1, i);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let x = document.getElementById("mySlides" + no).children;
  console.log(x)
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (let i = 0; i < x.length; i++) {

    for (let c of x[i].children)
      c.style.display = "none";  

  }

  for (let c of x[slideIndex[no]-1].children)
    c.style.display = "inline-block";  
}
