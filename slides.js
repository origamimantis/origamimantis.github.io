let slidelist = [

    {
      "img" : "slides/heroku.png",
      "txt" : "Me having to find a new place to host my portfolio demos after Heroku got rid of its free plan (circa 2022, grayscale)"
    },
    {
      "img" : "slides/crbs_pred.jpeg",
      "txt" : "Center for Research in Biological Systems @ UCSD / UCI, Aug 2021. A slice of a microscopy image with chlamydia segmented and classified. The classes are rb/db/eb/ib : green/blue/purple/yellow.",
    },
    {
      "img" : "slides/biou_simann.jpg",
      "txt" : "2021 summer research for UCI MathBioU. Optimizing a model of a DNA strand with respect to contact frequency data. This strand is of the miR9-2 locus, a gene that creates microRNA which is vital to brain development in embryos.",
    },
    {
      "img" : "slides/wbo.jpg",
      "txt" : "2021 spring research, UCI Mobley Lab. The subject (computational chem) was interesting, but I made plots. This one shows algorithm vs empirical Wiberg bond order; others were made for molecular energy and conformation RMSD.",
    },
    {
      "img" : "slides/hack2020_0.jpg",
      "txt" : "HackUCI 2020. Our project was ART, which is accessible from this website.",
    },
    {
      "img" : "slides/hack2020_1.jpg",
      "txt" : "HackUCI 2020. Hard at work???",
    },
    {
      "img" : "slides/hack2020_2.jpg",
      "txt" : "HackUCI 2020. \"Rigorous user testing.\""
    },
    {
      "img" : "reader_33.png",
      "txt" : "ICS33 reader at UCI in 2019. This was the picture used on the class website.",
    },
    {
      "img" : "slides/drone.jpg",
      "txt" : "Shanghai Jiaotong University research intern, summer 2019, to research \"autonomous quadrotor landing on a moving platform\". Flying the drone using its normal remote control.",
    },
    {
      "img" : "slides/drone2.png",
      "txt" : "Shanghai Jiaotong University research intern, summer 2019. Flying the drone via ROS (Robot Operating System) using a pub-sub mechanism. The drone was crashed many times.",
    },
    {
      "img" : "slides/detect.png",
      "txt" : "Shanghai Jiaotong University research intern, summer 2019. A flawed object detection algorithms that draws a box around the largest group of pixels close to a target color instead of actually identifying objects.",
    },
]


window.onload = () => 
{
  let style = []
  let html = []

  let imgw_ = 640
  let imgh_ = 400
  let imgw = "" + imgw_ + "px"
  let imgh = "" + imgh_ + "px"

  style.push( '  <style>\n')
  style.push( '    body\n')
  style.push( '    {\n')
  style.push( '      font-family: "Courier New";\n')
  style.push( '    }\n')

  style.push( '* {box-sizing: border-box}\n')
  style.push( '\n')
  style.push( '.slideshow-container {\n')
  style.push( '        position: relative;\n')
  style.push( '        width: ' + (2*imgw_ + 100) + 'px;\n')
  style.push( '        height: ' + imgh + ';\n')
  style.push( '        display: inline-block;\n')
  style.push( '        margin: auto;\n')
  style.push( '}\n')
  style.push( '.slideimg {\n')
  style.push( '        width: ' + imgw + ';\n')
  style.push( '        height: ' + imgh + ';\n')
  style.push( '        vertical-align: left;\n')
  style.push( '        margin-left: 50px;\n')
  style.push( '        overflow: hidden;\n')
  style.push( '        display: inline-block;\n')
  style.push( '        object-fit: cover;\n')
  style.push( '        border:1px solid black;\n')
  style.push( '}\n')
  style.push( '.imgtext {\n')
  style.push( '        display: inline-block;\n')
  style.push( '        width: ' + imgw + ';\n')
  style.push( '        vertical-align: top;\n')
  style.push( '        word-wrap: break-word;\n')
  style.push( '}\n')
  style.push( '\n')
  style.push( '.prev, .next {\n')
  style.push( '        cursor: pointer;\n')
  style.push( '        position: absolute;\n')
  style.push( '        display: inline-flex;\n')
  style.push( '        align-items: center;\n')
  style.push( '        top: 0px;\n')
  style.push( '        height: 100%;\n')
  style.push( '        padding: 16px;\n')
  style.push( '        color: black;\n')
  style.push( '        font-weight: bold;\n')
  style.push( '        font-size: 18px;\n')
  style.push( '        transition: 0.3s ease;\n')
  style.push( '        user-select: none;\n')
  style.push( '        text-decoration: none !important;\n')
  style.push( '}\n')
  style.push( '\n')
  style.push( '.next {\n')
  style.push( '        right: ' + imgw_ + 'px;\n')
  style.push( '}\n')
  style.push( '\n')
  style.push( '.prev:hover, .next:hover {\n')
  style.push( '        background-color: black;\n')
  style.push( '        color: white;\n')
  style.push( '}\n')
  style.push( '.slidecap {\n')
  style.push( '        width: ' + (imgw_+100) + 'px;\n')
  style.push( '        word-break: normal;\n')
  style.push( '        height: 55px;\n')
  style.push( '        overflow: hidden;\n')
  style.push( '}\n')
  style.push( '  </style>\n')
  style.push( '\n')


  html.push('    <div id="slides">\n')
  slidelist.forEach((slide, i) =>
  {

      html.push('        <div>\n')
      html.push('          <img class="slideimg" src="img/'+slide["img"]+'"><br>\n')
      html.push('          <br>\n')
      html.push('          <a class="slidecap">' + slide["txt"] + '</a><br>\n')
      html.push('        </div>\n')


  });
  html.push('    </div>\n')
  html.push('    <a class="prev" onclick="shiftSlide(-1)">&#10094;</a>\n')
  html.push('    <a class="next" onclick="shiftSlide( 1)">&#10095;</a>\n')
  html.push('  <br>\n')



  el = document.head
  el.innerHTML += style.join("")
  el = document.getElementById("slides_wrapper")
  el.innerHTML = html.join("")

  setup_slide_control();
};


let slideValue = null;
let slideContent = null;

function setup_slide_control()
{
  slideValue = 0
  slideContent = document.getElementById("slides").children

  updateSlide(0);
}

function shiftSlide(shift)
{
  let x = slideContent

  slideValue = (x.length + slideValue + shift) % x.length

  updateSlide();
}

function updateSlide()
{
  x = slideContent;

  for (let s of x)
  {
    for (let c of s.children)
      c.style.display = "none";  
  }

  for (let c of x[slideValue].children)
    c.style.display = "inline-block";  
}
