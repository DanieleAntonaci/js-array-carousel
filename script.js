let btnBefore = document.querySelector('.btn.top');
let btnAfter = document.querySelector('.btn.bottom');
let items = document.getElementsByClassName('box-img');
let activeItems = 0;
const ul = document.querySelector('ul');
let slide = document.getElementById('slide');
let arrayImg = [];
let content;


for (let i = 0; i < 5; i++) {
    content = `<li class='box-img'><img src="img/0${i + 1}.webp"></li>`
    ul.innerHTML += content
    arrayImg.push(content)
};
// arrayImg[0].classList.add('active')

// btnAfter.addEventListener('click', function () {

//     if (activeItems < arrayImg.length - 1) {
//         arrayImg[activeItems].classList.remove('active');

//         activeItems++;

//         items[activeItems].classList.add('active');
//         if (activeItems === items.length - 1) {
//             btnAfter.classList.add('hidden')
//         }
//         if (activeItems == 0) {
//             btnBefore.classList.add('hidden')
//         } else if (activeItems > 0) {
//             btnBefore.classList.remove('hidden')
//         }

//     }
// });


// btnBefore.addEventListener('click', function () {

//     if (activeItems > 0) {
//         btnBefore.classList.remove('hidden')
//         items[activeItems].classList.remove('active');

//         activeItems--;

//         arrayImg[activeItems].classList.add('active');

//         if (activeItems == 0) {
//             btnBefore.classList.add('hidden')
//         }
//         if (activeItems < arrayImg.length - 1) {
//             btnAfter.classList.remove('hidden')
//         }
//     }
// })