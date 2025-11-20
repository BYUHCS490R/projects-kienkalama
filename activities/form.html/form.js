document.getElementById("myform").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault(); // stop normal form submission

    const form = event.target;
    const formData = new FormData(form);
    const dataObject = {};

    // Convert form fields to JS object
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });

    // ---- VALIDATION ----
    if (!dataObject.fname || dataObject.fname.trim() === "") {
        alert("Full Name is required.");
        return;
    }

    if (!dataObject.email || dataObject.email.trim() === "") {
        alert("Email is required.");
        return;
    }

    if (!dataObject.pass || dataObject.pass.trim() === "") {
        alert("Password is required.");
        return;
    }

    // Age check (must exist)
    const age = Number(dataObject.age);
    if (isNaN(age) || age < 18 || age > 99) {
        alert("Age must be between 18 and 99.");
        return;
    }

    if (dataObject.fname.length < 3) {
        alert("Full Name must be at least 3 characters long.");
        return;
    }

    console.log("Form object ready to send:", dataObject);

    // ---- AJAX / XHR Simulation with GET (required by GitHub Pages) ----
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", "submit.json", true);  // Load the mock JSON file

    // xhr.onload = function() {
    //     if (xhr.status === 200) {
    //         const response = JSON.parse(xhr.responseText);

    //         if (response.success) {
    //             document.getElementById("serverMessage").textContent = response.message;
    //             document.getElementById("serverMessage").style.color = "green";

    //             // Notify user & reset form
    //             form.reset();
    //             disableFormFields(form);
    //         }
    //     } else {
    //         alert("Error loading server response.");
    //     }
    // };

    // xhr.onerror = function() {
    //     alert("Network error.");
    // };

    // xhr.send(); // send GET request
}

function disableFormFields(form) {
    const elements = form.querySelectorAll("input, select, button, textarea");
    elements.forEach(el => el.disabled = true);
}

const fullname = document.getElementById("full-name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;
const age = document.getElementById("age") ? document.getElementById("age").value : null;

const formData = {
    name: fullname,
    email: email,
    password: password,
    age: age,
};

// console.log(formData);

const xhr = new XMLHttpRequest();
xhr.open("GET", "submit.json", true);
// xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

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

// xhr.send(JSON.stringify(formData));
xhr.send();