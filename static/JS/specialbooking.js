function validation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const datetime = document.getElementById("datetime").value;

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

    // User email Validation
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
        return false;
    }
    if (email.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }

    // User Phone number Validations
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (phone == "") {
        alert("Phone Number must be filled out");
        return false;
    }
    if (isNaN(phone)) {
        alert("Phone Number must be in Numbers");
        return false;
    }
    if (phone.length != 10) {
        alert("Phone Number must be Correct");
        return false;
    }
    if (phone.match(phoneno)) {
        return true;
    } else {
        alert("Not a valid Phone Number");
        return false;
    }

}