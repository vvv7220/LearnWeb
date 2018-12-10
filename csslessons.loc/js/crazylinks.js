x = 0;
y = 0;
quim = new Set();
onmousemove = function () {
  if (arguments[0].target.nodeName === 'A') {
    quim.add(arguments[0].target);
    if (x + y == 0) {
      x = arguments[0].pageX;
      y = arguments[0].pageY;
      ii = 0;
      setInterval(function () {
        ii = Math.round(Math.random());
        quim.forEach(function (i) {
          ii++;
          i.style.cssText += "color: #" + (Math.round(Math.random()) ? 'f' : '0') + (Math.round(Math.random()) ? 'f' : '0') + (Math.round(Math.random()) ? 'f' : '0') + ";";
          (i.style.position !== "absolute") && frig(i)

          if ((y - (i.offsetHeight / 2)) > i.offsetTop) {
            i.style.top = (i.offsetTop + ii) + 'px';
          }
          if ((y - (i.offsetHeight / 2)) < i.offsetTop) {
            i.style.top = (i.offsetTop - ii) + 'px';
          }
          if ((x - (i.offsetWidth / 2)) > i.offsetLeft) {
            i.style.left = (i.offsetLeft + ii) + 'px';
          }
          if ((x - (i.offsetWidth / 2)) < i.offsetLeft) {
            i.style.left = (i.offsetLeft - ii) + 'px';
          }


        })

      }, 50);
    }
  }
  if (x + y != 0) {
    x = arguments[0].pageX;
    y = arguments[0].pageY;
  }
}

function frig() {
  ass = arguments[0];
  Left = 0;
  Top = 0;
  while (ass) {
    Left += ass.offsetLeft;
    Top += ass.offsetTop;
    ass = ass.offsetParent;
  }
  arguments[0].style.cssText += "position: absolute; left: " + Left + "px; top:" + Top + "px;white-space: nowrap;font-size: 3em;";
  arguments[0].style.cssText += "background-color: #" + (Math.round(Math.random()) ? 'f' : '0') + (Math.round(Math.random()) ? 'f' : '0') + (Math.round(Math.random()) ? 'f' : '0') + ";";
}