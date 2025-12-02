const form = document.getElementById("myform");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop actual submission

    // Collect form data dynamically
    const formData = {};
    new FormData(form).forEach((value, key) => formData[key] = value);

    // Simple validation
    if (!formData.fname || formData.fname.trim() === "") {
        alert("Full Name is required");
        return;
    }

    if (!formData.email || formData.email.trim() === "") {
        alert("Email is required");
        return;
    }

    const age = Number(formData.age);
    if (isNaN(age) || age < 18 || age > 99) {
        alert("Age must be between 18 and 99");
        return;
    }

    console.log("Form ready to 'submit':", formData);

    // Simulate server response by GETting submit.json
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json?t=" + new Date().getTime(), true); // cache-busting
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                messageDiv.innerText = `Hello ${formData.fname}, ${response.message}`;
                messageDiv.style.color = "green";

                // Reset and disable form
                form.reset();
                disableFormFields(form);
            } else {
                messageDiv.innerText = "Error submitting form.";
                messageDiv.style.color = "red";
            }
        }
    };
    xhr.send();
});

function disableFormFields(form) {
    form.querySelectorAll("input, select, textarea, button").forEach(el => el.disabled = true);
}
