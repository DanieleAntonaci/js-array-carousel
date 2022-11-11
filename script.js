let btnBefore = document.querySelector('.btn.top');
let btnAfter = document.querySelector('.btn.bottom');
let arrayImg = []
let activeItems = 0;
const ul = document.querySelector('ul');
let slide = document.getElementById('slide');
let content;


for (let i = 0; i < 5; i++) {
    content = `<li class='box-img'><img src="img/0${i + 1}.webp"></li>`
    ul.innerHTML += content;
    arrayImg.push(content);
};

let arrayImmagini = document.getElementsByClassName('box-img');
arrayImmagini[0].classList.add('active');
arrayImmagini[0].classList.add('first');
arrayImmagini[1].classList.add('second');
arrayImmagini[4].classList.add('five');


btnAfter.addEventListener('click', function () {

    if (activeItems < arrayImmagini.length - 1) {
        arrayImmagini[activeItems].classList.remove('active');

        activeItems++;

        arrayImmagini[activeItems].classList.add('active');
        if (activeItems === arrayImmagini.length - 1) {
            btnAfter.classList.add('hidden')
        }
        if (activeItems == 0) {
            btnBefore.classList.add('hidden')
        } else if (activeItems > 0) {
            btnBefore.classList.remove('hidden')
        }

    }
});


btnBefore.addEventListener('click', function () {

    if (activeItems > 0) {
        btnBefore.classList.remove('hidden')
        arrayImmagini[activeItems].classList.remove('active');

        activeItems--;

        arrayImmagini[activeItems].classList.add('active');

        if (activeItems == 0) {
            btnBefore.classList.add('hidden')
        }
        if (activeItems < arrayImmagini.length - 1) {
            btnAfter.classList.remove('hidden')
        }
    }
})