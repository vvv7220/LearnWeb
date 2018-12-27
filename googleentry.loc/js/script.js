// var crt = document.getElementById('crt');
// crt.onmouseover = function () {
//     crt.style.opacity = "0.2";
// }

//  style=ftext.style;
//  ftext.className="fChange";

//  document.addEventListener('DOMContentLoaded', () => {
//   const ftext = document.getElementById('ftext'), 
//         fild  = document.getElementById('fild');
//   ['focus', 'blur'].forEach(evt => fild.addEventListener(evt, handler)); 
  
//   function handler(e) {
//     ftext.classList.toggle('foo', e.type === 'focus' || this.value.length); 
//   } 
// });

window.onload = function(){
  let ftext = document.getElementById('ftext'), 
  fild  = document.getElementById('fild');
fild.onfocus = function(){
ftext.className="move";
}
fild.onblur = function(){
  if(this.value){
    ftext.className="move";
  }
  else{
  ftext.className="";
}
  }
}
//Программирование кнопки Далее
let polosa = document.getElementById('polosa');
let next = document.querySelector('.nxt');
let mini = document.querySelector('.mini');
let send  = document.getElementById('fild');
next.onclick = function(){
polosa.style.left = -452 + 'px';
mini.textContent = send.value;
}
// const nxt = document.querySelector(.nxt);


























//  window.onload = function(){
//    if(true){
//  fild.onmousedown = function(){
//   style=ftext.style;
//   ftext.className="fChange";
// }

//  }
//Это неудобно. Это еще одна причина делать через CSS (комбинацией атрибута required и селектора :invalid, например).
// }
 