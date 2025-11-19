const fullname = document.getElementById("full-name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;
const age = document.getElementById("age") ? document.getElementById("age").value : null;

const formData = {
    name: fullname,
    email: email,
    password: password,
    age: age
};

console.log(formData);

const xhr = new XMLHttpRequest();
xhr.open("POST", "submit.json", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);

            document.getElementById('message').innerText = response.message;
        } else {
            alert("Error submitting form.");
        }
    }
};

xhr.send(JSON.stringify(formData));