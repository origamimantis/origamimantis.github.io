import json


jj = None
with open("imgs.json") as the_file:
    jj = json.load(the_file)

slidelist = jj["stuff"]

html = []

imgw_ = 640
imgh_ = 400
imgw = f"{imgw_}px"
imgh = f"{imgh_}px"

html.append( '<html>\n')
html.append( '<head>\n')
html.append( '  <title>Eric Zhang</title>\n')
html.append( '  <style>\n')
html.append( '    body\n')
html.append( '    {\n')
html.append( '      font-family: "Courier New";\n')
html.append( '    }\n')

html.append( '* {box-sizing: border-box}\n')
html.append( '\n')
html.append( '.slideshow-container {\n')
html.append( '        position: relative;\n')
html.append(f'        width: {2*imgw_ + 100}px;\n')
html.append(f'        height: {imgh};\n')
html.append( '        display: inline-block;\n')
html.append( '        margin: auto;\n')
html.append( '}\n')
html.append( 'img {\n')
html.append(f'        width: {imgw};\n')
html.append(f'        height: {imgh};\n')
html.append( '        vertical-align: left;\n')
html.append( '        overflow: hidden;\n')
html.append( '        display: inline-block;\n')
html.append( '        object-fit: cover;\n')
html.append( '}\n')
html.append( '.imgtext {\n')
html.append( '        display: inline-block;\n')
html.append(f'        width: {imgw};\n')
html.append( '        vertical-align: top;\n')
html.append( '        word-wrap: break-word;\n')
html.append( '}\n')
html.append( '\n')
html.append( '.prev, .next {\n')
html.append( '        cursor: pointer;\n')
html.append( '        position: absolute;\n')
html.append( '        display: inline-flex;\n')
html.append( '        align-items: center;\n')
html.append( '        top: 0;\n')
html.append( '        height: 100%;\n')
html.append( '        padding: 16px;\n')
html.append( '        color: white;\n')
html.append( '        font-weight: bold;\n')
html.append( '        font-size: 18px;\n')
html.append( '        transition: 0.6s ease;\n')
html.append( '        user-select: none;\n')
html.append( '}\n')
html.append( '\n')
html.append( '.next {\n')
html.append(f'        right: {imgw_ + 100}px;\n')
html.append( '}\n')
html.append( '\n')
html.append( '.prev:hover, .next:hover {\n')
html.append( '        background-color: #f1f1f1;\n')
html.append( '        color: black;\n')
html.append( '}\n')
html.append( '\n')
html.append( '</style>\n')
html.append( '</head>\n')
html.append( '<body>\n')


html.append( '<div id="all-slides">\n')

for i,slide in enumerate(slidelist):
    date = slide["date"]
    titlecaption = slide["txt"]
    s = (   f'  {date}<br>\n'
            f'  {titlecaption}<br>\n'
            f'  <div class="slideshow-container">\n'
            f'    <div id="mySlides{i}">\n')

    for j, img in enumerate(slide["imgs"]):
        s += (
            f'        <div>\n'
            f'          <img src="img/{img["src"]}">\n'
            f'          <p class="imgtext">{img["txt"]}</p>\n'
            f'        </div>\n')


    s +=    f'    </div>\n'
    if len(slide["imgs"]) > 1:
        s+=(f'    <a class="prev" onclick="plusSlides(-1, {i})">&#10094;</a>\n'
            f'    <a class="next" onclick="plusSlides(1, {i})">&#10095;</a>\n')
    s += (  f'  </div>\n'
            f'  <br>\n'
            f'  <br>\n')
            #f'  <div style="width:{imgw}; height:{imgh}"></div>\n')

    html.append(s)

html.append(f'</div>\n')
html.append(f'<script src="slide_control.js"></script>\n')

with open("pictures.html", "w") as added:
    for s in html:
        added.write(s)
