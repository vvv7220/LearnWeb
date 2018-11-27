let dozer = document.getElementById('dozer');
let code = document.querySelector('code').textContent;
let slideHeader = document.getElementById('slideHeader');
let arrText = code.split('');
window.onclick = function () {
dozer.style.left = 1400 + 'px';
code.style.opacity = 0;
slideHeader.style.opacity = 1;
let footer = document.querySelector('footer');
for(var i = 0; i<arrText.length; i++){
footer.innerHTML = arrText[i];
}

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