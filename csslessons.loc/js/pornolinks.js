// Ball and background 
onload = function () {
  XX = (window.innerWidth / 2) - (sex.offsetWidth / 2);
  YY = (window.innerHeight / 2) - (sex.offsetHeight / 2);
  xf = 0;
  yf = 0;
  setInterval(function () {
    if (sex.offsetLeft <= 0) xf = 1;
    if (sex.offsetTop <= 0) yf = 1;
    if ((sex.offsetLeft + sex.offsetWidth) >= window.innerWidth) xf = 0;
    if ((sex.offsetTop + sex.offsetHeight) >= window.innerHeight) yf = 0;
    if (!xf) XX--;
    if (!yf) YY--;
    if (xf) XX++;
    if (yf) YY++;
    sex.style.cssText += 'left: ' + XX + 'px; top: ' + YY + 'px; background-position: -' + (XX + sex.offsetWidth + 200) + 'px -' + (YY + sex.offsetHeight + 0) + 'px;';
  }, 1);
}
//Text area and buttons

x = 0;
y = 0;


onmousemove = function (cunt) {
  (x + y == 0) && setInterval(function () {
    (no.style.position !== "absolute") && pussy(no),
      (yes.style.position !== "absolute") && pussy(yes)
    if ((y - (yes.offsetHeight / 2)) > yes.offsetTop) {
      yes.style.top = (yes.offsetTop + 1) + 'px';
    }
    if ((y - (yes.offsetHeight / 2)) < yes.offsetTop) {
      yes.style.top = (yes.offsetTop - 1) + 'px';
    }
    if ((x - (yes.offsetWidth / 2)) > yes.offsetLeft) {
      yes.style.left = (yes.offsetLeft + 1) + 'px';
    }
    if ((x - (yes.offsetWidth / 2)) < yes.offsetLeft) {
      yes.style.left = (yes.offsetLeft - 1) + 'px';
    }
    text.style.cssText += "color: #" + (Math.round(Math.random()) ? 'f' : '0') + (Math.round(Math.random()) ? 'f' : '0') + (Math.round(Math.random()) ? 'f' : '0') + ";";
  }, 20);
  x = cunt.pageX;
  y = cunt.pageY;

  if (cunt.target.id == 'no') {
    try {
      fuck += 0;
    } catch (xxx) {
      fuck = setInterval(function () {
        if (y < (this.innerHeight / 2) && no.offsetTop + no.offsetHeight < this.innerHeight) {
          no.style.top = (no.offsetTop + 1) + 'px';
        }
        if (y > (this.innerHeight / 2) && no.offsetTop > 0) {
          no.style.top = (no.offsetTop - 1) + 'px';
        }

        if (x < (this.innerWidth / 2) && no.offsetLeft + no.offsetWidth < this.innerWidth) {
          no.style.left = (no.offsetLeft + 1) + 'px';
        }
        if (x > (this.innerWidth / 2) && no.offsetLeft > 0) {
          no.style.left = (no.offsetLeft - 1) + 'px';
        }

      }, 20);
    }
  }


}
onclick = function (cunt) {
  if (cunt.target.id === "yes") {
    location.href = "https://disney.ru/";
  }
  if (cunt.target.id === "no") {
    text.innerHTML = 'А ну пшел отседа, мелочь пузатая';
    window.location.href = "https://yandex.ru/images/search?text=gfhye%5Bf";
  }
}

function pussy(cock) {
  dick = cock;
  Left = 0;
  Top = 0;
  while (dick) {
    Left += dick.offsetLeft;
    Top += dick.offsetTop;
    dick = dick.offsetParent;
  }
  cock.style.position = "absolute";
  cock.style.top = Top + 'px';
  cock.style.left = Left + 'px';
}