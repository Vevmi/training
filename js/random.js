const random = Math.round(Math.random() * 800);
let userNum = null;
while (userNum !== random) {
  userNum = +prompt('Enter your number:');
  if (userNum > random) {
    alert('Бери меньше');
  } else {
    alert('Бери больше');
  }
}
alert('Молодец! Угадала))');