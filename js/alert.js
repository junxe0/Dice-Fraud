const alertbox = document.querySelector(".alertbox");
const alerts = document.querySelector('#alerts');

function showAlert(message) {
  alerts.innerText = message;
  alertbox.style.opacity = 1;
  setTimeout(() => {
    alertbox.style.opacity = 0;
  }, 2000);
}