import noUiSlider from "./nouislider/nouislider.js"

let sort = document.querySelector(".sort");



// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
};

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 10],
    step: 1,
    tooltips: [true,true],
    keyboardSupport: true,
    connect: true,
    range: {
        'min': 0,
        'max': 10
    }
});

document.querySelector('.modal__btn').addEventListener('click', function () {
  const values = slider.noUiSlider.get();
 const minRating = document.querySelector(".rating__input-min");
 const maxRating = document.querySelector(".rating__input-max");

 minRating.value = +values[0];
 maxRating.value = +values[1];

});
