f_.innerHTML=[...f_.innerText].map(a=>'<span>'+a+'</span>').join('');
    i=s=0;
    setInterval(()=>(s||(f_.childNodes[i].style.opacity='0'),s&&(f_.childNodes[i].style.opacity='1'),++i==f_.childNodes.length&&(i=0,s=!s)),100);