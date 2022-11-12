// Altra versione di creazione dell' array attraverso append 
let btnBefore = document.querySelector('.btn.top');
let btnAfter = document.querySelector('.btn.bottom');
let arrayImg = []
let activeItems = 0;
let slide = document.getElementById('slide');
let img = document.getElementsByClassName('box-img');

// 
for (let i = 0; i < 5; i++) {
    let newImg = document.createElement('img');
    newImg.src = `img/0${i + 1}.webp`;
    let newDiv = document.createElement('div');
    newDiv.classList.add('box-img');
    newDiv.append(newImg);
    slide.append(newDiv);
    arrayImg[i] = newDiv;
};


// crop image
arrayImg[0].classList.add('active');
arrayImg[0].classList.add('first');
arrayImg[1].classList.add('second');
arrayImg[4].classList.add('five');


btnAfter.addEventListener('click', function () {

    if (activeItems < arrayImg.length - 1) {
        arrayImg[activeItems].classList.remove('active');

        activeItems++;

        arrayImg[activeItems].classList.add('active');
        if (activeItems === arrayImg.length - 1) {
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
        arrayImg[activeItems].classList.remove('active');

        activeItems--;

        arrayImg[activeItems].classList.add('active');

        if (activeItems == 0) {
            btnBefore.classList.add('hidden')
        }
        if (activeItems < arrayImg.length - 1) {
            btnAfter.classList.remove('hidden')
        }
    }
})