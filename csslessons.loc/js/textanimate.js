// function searchInText() {
// var word = document.getElementById('search').value;//Можно записать короче var word = search.value;
// var text = document.getElementById('textF').innerHTML;
// var text2 = text.split('');//Достаем строку и делаем из нее массив
// var a = text.indexOf(word);//Метод indexOf() принимает два аргумента. searchElement -это элемент, который нужно найти в массиве. fromIndex – это индекс массива, с которого нужно начать поиск.
// var b = parseInt(text.indexOf(word)) + parseInt(word.length);//Функция parseInt преобразуют строку символ за символом, пока это возможно.При возникновении ошибки возвращается число, которое получилось.
// text2.splice(a, 0, '<span style="color: red">');//Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
//  text2.splice(b + 1, 0, '</span>');
// text3 = text2.join('');//Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
// var textF = document.getElementById('textF');
// textF.innerHTML = text3;
// if(a == -1){
//      alert('не найдено');
//    }
//   }
  //Работа с анимацией текста
  /*
  1) Буквы в коде html
  2) В начале анимации скрыть блок 
  3) Создание новых элементов DOM с буквами
  4) Создать им позиционирование и анимировать с JS
  */
//  let par = document.getElementById('par');
//  window.onclick = function () {
//     par.remove();
    
//  }
// let arrText = b2.split('');
// b2.innerText = arrText;
