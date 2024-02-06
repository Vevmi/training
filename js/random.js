const random = Math.round(Math.random() * 800);
let userNum = null;
 prompt('Угадай число от 0 до 800. Для начала игры введите ваше число:');
while (userNum !== random) {
  userNum = +prompt('Попробуй еще раз:');
  if (userNum > random) {
    alert('Бери меньше');
  } else {
    alert('Бери больше');
  }
}
alert('Молодец! Угадала))');
