const nextButton = document.querySelector('.nextBut');
const prevButton = document.querySelector('.preBut');
const image = document.querySelector('img');
let start = document.querySelector('#start');
let imageFile = document.querySelector('input[type="file"]');
let finish=document.querySelector('#finish')
prevButton.disabled = true;
let c = 0;
let images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mettur_dam.jpg/800px-Mettur_dam.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/NLCIL_Corp_Office.jpg/1024px-NLCIL_Corp_Office.jpg', 'https://images.assettype.com/swarajya/2018-12/2a98584d-d516-4cb9-8ac7-5ef2b214a2fd/48420878_1820838324691386_6174551418314162176_o.jpg?w=1280&q=100&fmt=pjpeg&auto=format" alt=""><a href="https://en.wikipedia.org/wiki/Integral_Coach_Factory','https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','https://images.unsplash.com/photo-1515019915774-f4887104b715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
let n = images.length;
nextButton.addEventListener('click', function () {
    animation();
    nextButton.disabled = false;
    c = c + 1;
    if (c === n - 1) {
        nextButton.disabled = true;
        prevButton.disabled = false;
    }
    start.textContent = c + 1;
    image.src = images[c];
    prevButton.disabled = false;
    animationOff();
})

prevButton.addEventListener('click', function () {
    animationOff();
    nextButton.disabled = false;
    c = c - 1
    if (c === 0) {
        prevButton.disabled = true;
        nextButton.disabled = false;

    }
    start.textContent = c + 1;
    image.src = images[c];
    animation();
})

function animation() {
    image.style.animation = 'fade 3s ease backwards';
}
function animationOff() {
    image.style.animation = 'fades 3s ease backwards';
}
