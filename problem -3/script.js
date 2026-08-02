function checkAge() {

    var age = document.getElementById("age").value;
    var message = document.getElementById("message");

    if (age == "") {
        message.innerHTML = "";
    }
    else if (age < 40) {
        message.innerHTML = "To be a part of the community, you need to at least 40";
        message.style.color = "black";
    }
    else if (age >= 40 && age <= 50) {
        message.innerHTML = "You are the youngsters of this community";
        message.style.color = "black";
    }
    else {
        message.innerHTML = "Top level members of the group";
        message.style.color = "red";
    }

}
