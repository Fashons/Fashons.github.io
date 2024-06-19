let money = 0;

document.getElementById('clickButton').addEventListener('click', function() {
  money += 1;
  document.getElementById('moneyDisplay').innerText = 'Money: ' + money;
});
