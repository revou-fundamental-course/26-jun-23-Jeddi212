var slider = document.getElementById('slider');

var slides = ['product2.jpg', 'product3.jpg', 'product4.jpg', 'product1.jpg'];
var quotes = [
    "sayuran segar dan bebas pestisida",
    "buah-buahan terbaik dengan cita rasa terbaik",
    "produk lokal terbaik dengan harga yang terbaik",
    "setiap hari beli sayur buah yang fresh di sini"
];


var Start = 0;

function sliderFunc() {
    if (Start < slides.length) {
        Start = Start + 1;
    }
    else {
        Start = 1;
    }

    slider.innerHTML = '<img src=img/' + slides[Start - 1] + ' class="fade">' 
    + '<figcaption class="fade">"' + quotes[Start - 1] + '"</figcaption>';
}

setInterval(sliderFunc, 4000);