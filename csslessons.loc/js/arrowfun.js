// Разбор стрелочной функции с ответов
let b3 = document.getElementById('b3');
let t = "Давай дасвиданя !!!".split('');
let i = 0;
let p = 1;
let z = p;
function f (){
   if(t.length!=i){
      x.innerHTML+=t[i];i++;f();
   }
  else{
     y.start();
     setInterval(function(){
        if(z>0 && z<40){
           z+=p;
   }
  else{
     p=p==1?-1:1;z+=p;
   }
     ;y.style.marginTop=z+'px';
   },15);
   }
}

b3.innerHTML='<marquee id="y"><b id="x"></b></marquee>';
y.stop();
x.style.fontSize="2vw";
f();
