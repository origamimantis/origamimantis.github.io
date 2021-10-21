
window.onload = () => 
{
  let slidelist = stuff["stuff"]

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
  style.push( 'img {\n')
  style.push( '        width: ' + imgw + ';\n')
  style.push( '        height: ' + imgh + ';\n')
  style.push( '        vertical-align: left;\n')
  style.push( '        overflow: hidden;\n')
  style.push( '        display: inline-block;\n')
  style.push( '        object-fit: cover;\n')
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
  style.push( '        top: 0;\n')
  style.push( '        height: 100%;\n')
  style.push( '        padding: 16px;\n')
  style.push( '        color: white;\n')
  style.push( '        font-weight: bold;\n')
  style.push( '        font-size: 18px;\n')
  style.push( '        transition: 0.6s ease;\n')
  style.push( '        user-select: none;\n')
  style.push( '}\n')
  style.push( '\n')
  style.push( '.next {\n')
  style.push( '        right: ' + (imgw_ + 100) + 'px;\n')
  style.push( '}\n')
  style.push( '\n')
  style.push( '.prev:hover, .next:hover {\n')
  style.push( '        background-color: #f1f1f1;\n')
  style.push( '        color: black;\n')
  style.push( '}\n')
  style.push( '  </style>\n')
  style.push( '\n')


  slidelist.forEach((slide, i) =>
  {
      date = slide["date"]
      titlecaption = slide["txt"]
      html.push(    '  ' + date + '<br>\n')
      html.push('  '+titlecaption+'<br>\n')
      html.push('  <div class="slideshow-container">\n')
      html.push('    <div id="slide' + i + '">\n')

      slide["imgs"].forEach( (img, j) =>
      {
	html.push('        <div>\n')
	html.push('          <img src="img/'+img["src"]+'">\n')
	html.push('          <p class="imgtext">'+img["txt"]+'</p>\n')
	html.push('        </div>\n')
      });


      html.push(    '    </div>\n')
      if (slide["imgs"].length > 1)
      {
	  html.push('    <a class="prev" onclick="plusSlides(-1, '+i+')">&#10094;</a>\n')
	  html.push('    <a class="next" onclick="plusSlides(1, '+i+')">&#10095;</a>\n')
      }

      html.push('  </div>\n')
      html.push('  <br>\n')
      html.push('  <br>\n')
  });

  html.push( '</div>\n')
  html.push( '<script src="slide_control.js"></script>\n')


  el = document.head
  el.innerHTML += style.join("")
  el = document.getElementById("all-slides")
  el.innerHTML = html.join("")
};
