const modal = document.getElementById("popup-box");
const refresBtn = document.getElementById("refresh");
var number = document.querySelectorAll(".number");
var selectedNum = document.querySelectorAll(".head ul li span");
var randomNum = document.querySelectorAll(".text ul li span");

var clickNumber = 0;
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    if (clickNumber < 6) {
      number[i].style.backgroundColor = "red";
      clickNumber++;

      selectedNum[clickNumber - 1].innerHTML = number[i].innerHTML;
      if (clickNumber == 6) {
        modal.style.display = "flex";
      }

      var rondomNumber = [Math.floor(Math.random() * 49) + 1];
      randomNum[clickNumber - 1].innerHTML = rondomNumber;
    }
    if (selectedNum[clickNumber - 1].innerHTML == rondomNumber) {
      randomNum[clickNumber - 1].style.color = "green";
    } else {
      randomNum[clickNumber - 1].style.color = "red";
    }
  });
}

refresBtn.addEventListener("click", () => {
  location.reload();
});
