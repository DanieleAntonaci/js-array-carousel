let btnBefore = document.querySelector('.btn.top');
let btnAfter = document.querySelector('.btn.bottom');
let items = document.getElementsByClassName('box-img');
let activeItems = 0;

btnAfter.addEventListener('click', function () {

    if (activeItems < items.length - 1) {
        items[activeItems].classList.remove('active');

        activeItems++;

        items[activeItems].classList.add('active');
        if (activeItems === items.length - 1) {
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
        items[activeItems].classList.remove('active');

        activeItems--;

        items[activeItems].classList.add('active');

        if (activeItems == 0) {
            btnBefore.classList.add('hidden')
        }
        if (activeItems < items.length - 1) {
            btnAfter.classList.remove('hidden')
        }
    }
})