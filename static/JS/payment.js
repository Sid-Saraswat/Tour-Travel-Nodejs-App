// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict';

//     window.addEventListener('load', function () {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');

//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();

function validation() {
    const name = document.getElementById("cc-name").value;
    const number = document.getElementById("cc-number").value;
    const expiration = document.getElementById("cc-expiration").value;
    const cvv = document.getElementById("cc-cvv").value;

    // User name Validation
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if ((name.length <= 2) || (name.length > 20)) {
        alert("Name must be between 2 and 20");
        return false;
    }
    if (!isNaN(name)) {
        alert("Name must be in alphabets");
        return false;
    }

    // User Card Number Validation
    if (number == "") {
        alert("Card Number must be filled out");
        return false;
    }
    if (number.length != 16) {
        alert("Invalid Card Number");
        return false;
    }
    if (isNaN(number)) {
        alert("Card Number Should only Contain Numbers Only");
        return false;
    }

    // User Card Expiry Validation
    if (expiration == "") {
        alert("Expiry must be filled out");
        return false;
    }
    if (expiration.length != 5) {
        alert("Invalid Expiry Date");
        return false;
    }

    // User Card CVV Validation
    if (cvv == "") {
        alert("CVV must be filled out");
        return false;
    }
    if (cvv.length != 3) {
        alert("Invalid CVV");
        return false;
    }
    if (isNaN(cvv)) {
        alert("CVV must be in Numbers");
        return false;
    }

}