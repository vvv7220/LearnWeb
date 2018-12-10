let dozer = document.getElementById('dozer');
let code = document.querySelector('code');
let slideHeader = document.getElementById('slideHeader');
// let arrText = code.textContent.split('');
window.onclick = function () {
  dozer.style.left = 1400 + 'px';
  code.style.opacity =  0;
  setTimeout (function () {slideHeader.style.opacity = 1}, 3000);
}
//Скрипт с ответов
// t="Давай дасвиданя !!!".split('');
// i=0;
// p=z=1;
// f=()=>setTimeout(()=>{if(t.length!=i)
//   {x.innerHTML+=t[i];i++;f();}
//   else{y.start();setInterval(()=>{if(z>0&&z<80){z+=p;}
//   else{p=p==1?-1:1;z+=p;};y.style.marginTop=z+'vh';},15);}},500);
// document.body.innerHTML='<marquee id="y"><b id="x"></b></marquee>';
// y.stop();
// x.style.fontSize="10vw";
// f();
//Эффект печатающий машинки на JavaScript
/*function writeTextByJS(id, text, speed){

	var ele = document.getElementById(id),
	    txt = text.join("").split("");

	var interval = setInterval(function(){

		if(!txt[0]){

			return clearInterval(interval);
		};

		ele.innerHTML += txt.shift();
	}, speed != undefined ? speed : 100);

	return false;
};*/
//Поиск по тексту
/*
HTML:
<input type="text" id="search"><span>search</span>
<p id="textF">В фотоатласе дан обзор типовых растений основных биоценозов Московского региона.</p>
search.focus();
    search.onkeyup = function (event) {
        if (event.keyCode == 0xA || event.keyCode == 0xD) {
            var word = search.value;
                var text = textF.innerHTML;
                var text2 = text.split('');
                var a = text.indexOf(word);
                var b = parseInt(text.indexOf(word)) + parseInt(word.length);
                text2.splice(a, 0, '<span style="color: red">');
                text2.splice(b + 1, 0, '</span>');
                text3 = text2.join('');
                textF = document.getElementById('textF');
                textF.innerHTML = text3;
                if(a == -1){
                    alert('не найдено');
                }
            }
    }
    */