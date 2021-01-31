// Task 1
// Повторите действия указанные в уроке. Добавьте кнопку, при нажатии на которую считывается цвет выбранный пользователем (input type=color), и применяется к фону страницы.

let t1 = document.querySelector('.t1');
let color = document.querySelector('.color-input');

t1.onclick = () => {
   document.querySelector('body').style.background = color.value;
}

// Task 2
// Создайте два input[type=color]. В одном пользователь может выбрать цвет фона, во втором цвет текста. При нажатии на кнопку Применить - примените эти цвета к странице. Также добавьте кнопку сброса цвета на черный-белый.

let t2 = document.querySelector('.t2');
let t21 = document.querySelector('.t21');
let color2 = document.querySelector('.color-input-2');
let color3 = document.querySelector('.color-input-3');

t2.onclick = () => {
   document.querySelector('body').style.background = color2.value;
   document.querySelector('body').style.color = color3.value;
}

t21.onclick = () => {
   document.querySelector('body').style.background = '#fff';
   document.querySelector('body').style.color = '#000';
}

// Task 3
// Добавьте input[type=range] начальным значением которого есть число 14, а конечным 48. Ползунок установлен на 16. При изменении положения ползунка меняйте размер текста в соответствии со значением.

let r3 = document.querySelector('.range');

r3.oninput = () => {
   document.querySelector('body').style.fontSize = r3.value + 'px';
   document.querySelector('span').innerHTML = r3.value;
}

// Task 4
// Рядом с созданным ползунком добавьте span куда выводите текущее значение ползунка. Для этого используйте событие input, oninput.

// см. Task 3

// Task 5
// Создайте три input type=range. Значения от нуля до 255. Создайте блок, цвет rgb которого определятеся значением на ползунках. При изменении положения ползунков, изменяется цвет блока. Возле каждого ползунка выводить текущее значение цвета.

let t51 = document.querySelector('.t51');
let t52 = document.querySelector('.t52');
let t53 = document.querySelector('.t53');
let span1 = document.querySelector('.span1')
let span2 = document.querySelector('.span2')
let span3 = document.querySelector('.span3')
let rc = document.querySelector('.rangeColor');

t51.oninput = rgb;
t52.oninput = rgb;
t53.oninput = rgb;

function rgb() {
   let r = t51.value;
   let g = t52.value;
   let b = t53.value;
   rc.style.background = `rgb(${r},${g},${b})`;  // !!!
   span1.innerHTML = r;
   span2.innerHTML = g;
   span3.innerHTML = b;
}









