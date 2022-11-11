let btnBefore = document.querySelector('.btn.top');
let btnAfter = document.querySelector('.btn.bottom');
let items = document.getElementsByClassName('box-img');
let activeItems = 0;

btnAfter.addEventListener('click', function () {

    if (activeItems <= items.length - 1) {
        if (activeItems === items.length - 1) {
            items[activeItems].classList.remove('active');

            activeItems = 0;

            items[activeItems].classList.add('active');
        } else {

            items[activeItems].classList.remove('active');

            activeItems++;

            items[activeItems].classList.add('active');
        }

    }

});


btnBefore.addEventListener('click', function () {


    if (activeItems >= 0) {
        if (activeItems === 0) {
            items[activeItems].classList.remove('active');

            activeItems = items.length - 1;

            items[activeItems].classList.add('active');
        } else {

            btnBefore.classList.remove('hidden')
            items[activeItems].classList.remove('active');

            activeItems--;

            items[activeItems].classList.add('active');
        }
    }

})