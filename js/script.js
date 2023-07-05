var sliderOne = document.getElementById('sliderOne');

var slides = ['product2.jpg', 'product3.jpg', 'product4.jpg', 'product1.jpg'];
var quotes = [
    "sayuran segar dan bebas pestisida",
    "buah-buahan terbaik dengan cita rasa terbaik",
    "produk lokal terbaik dengan harga yang terbaik",
    "setiap hari beli sayur buah yang fresh di sini"
];

var sliderTwo = document.getElementById('sliderTwo');

var names = ['Agung Permana', 'Ronald Henjaya', 'Zoey Kristabel', 'Florence Hughes'];
var profesi = ['Pustakawan, 34', 'Pegawai Swasta, 40', 'Mahasiswi, 21', 'Ibu Rumah Tangga, 28'];
var profile_pic = ['profile2.png', 'profile3.png', 'profile4.png', 'profile1.png']

var idx = 0;

function sliderFunc() {
    idx = idx < slides.length ? idx + 1 : 1

    sliderOne.innerHTML = '<img src=img/product/' + slides[idx - 1] + ' class="fade">'
        + '<figcaption class="fade">"' + quotes[idx - 1] + '"</figcaption>';

    sliderTwo.innerHTML = '<figure class="user-picture">'
        + '<img src="img/profile/' + profile_pic[idx - 1] + '" alt="gambar placeholder user" class="fade">'
        + '</figure>'
        + '<div class="user-info">'
        + '<h4 class="user-name fade">' + names[idx - 1] + '</h4>'
        + '<p class="profesi fade">' + profesi[idx - 1] + '</p>'
        + '</div>'
}

setInterval(sliderFunc, 4000);


function validateForm() {
    var fullName = document.contactUs.fullName.value;
    var email = document.contactUs.email.value;
    var phone = document.contactUs.phone.value;
    var message = document.getElementById("message").value;
    var interest = document.contactUs.interest.value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (fullName == "") {
        alert("Please provide your name");
        document.contactUs.fullName.focus();
        return false;
    }

    if (email == "") {
        alert("Please provide your email");
        document.contactUs.email.focus();
        return false;
    } else {
        if (!email.match(mailformat)) {
            alert("Your email address is invalid");
            document.contactUs.email.focus();
            return false;
        }
    }

    if (phone == "") {
        alert("Please provide your phone number");
        document.contactUs.phone.focus();
        return false;
    } else {
        if (/^[0-9]+$/.test(phone) && (phone.length < 11 || phone.length > 12)) {
            alert("Your phone number is invalid");
            document.contactUs.phone.focus();
            return false;
        }
    }

    if (message == "") {
        alert("Please provide some message");
        document.contactUs.message.focus();
        return false;
    }

    message = message.trim()

    if (interest == "") {
        alert("Please select your interest");
        document.contactUs.interest.focus();
        return false;
    }

    alert("Hello" + fullName + "\nYour email is " + email
        + "\nYour number is " + phone + ".\nYou gave some message '" + message
        + "'\nLastly you have interest in " + interest + " product.")
    return true;
}