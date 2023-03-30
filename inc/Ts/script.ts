//Barre de progression

const healthBar = document.querySelector('#health_bar');
const increaseHealthButton = document.querySelector('#increase_health_button');

increaseHealthButton.onclick = function() {
  if (healthBar.value < healthBar.max) {
    healthBar.value++;
    updateHealthBar();
  }
}

setInterval(function() {
  if (healthBar.value >= 50) {
    healthBar.value -= healthBar.max * 0.1;
    updateHealthBar();
  } else if (healthBar.value >= 15 && healthBar.value < 50) {
    healthBar.value -= healthBar.max * 0.06;
    updateHealthBar();
  } else {
    healthBar.value -= healthBar.max * 0.02;
    updateHealthBar();
  }
}, 1000);

function updateHealthBar() {
  let percent = (healthBar.value / healthBar.max) * 100;

  if (percent >= 50) {
    healthBar.style.setProperty('--progress-color', 'green');
    healthBar.style.setProperty('--progress-value', `${percent}%`);
  } else if (percent >= 15 && percent < 50) {
    healthBar.style.setProperty('--progress-color', 'yellow');
    healthBar.style.setProperty('--progress-value', `${percent}%`);
  } else {
    healthBar.style.setProperty('--progress-color', 'red');
    healthBar.style.setProperty('--progress-value', `${percent}%`);
  }
}
