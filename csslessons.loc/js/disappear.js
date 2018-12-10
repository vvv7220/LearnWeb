pusk=()=>{
rb=[];
fl = document.querySelector('.floating-text-box').children;
ti=setInterval(()=>{
    do{
    f_ = fl[r=Math.floor(Math.random() * fl.length)];
    }while (~rb.indexOf(r)&&rb.length!=fl.length);
            if(rb.length-fl.length){
                rb[rb.length]=r;
        f_.innerHTML = [...f_.innerText].map(a => '<span>' + a + '</span>').join('');
        i = s = 0;
        tim = setInterval(()=>(s||(f_.childNodes[i].style.opacity='0'),
        s&&clearInterval(tim),++i==f_.childNodes.length&&(i=0,s++)),100);

    } else clearInterval(ti);
},3000);}