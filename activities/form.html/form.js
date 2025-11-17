const formData = {
    name: fullname,
    email: email,
    password: password, 
    age: age
};

console.log(formData)
const xhr = new XMLHttpRequest();
xhr.open("GET", "sumbit.json", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Form submitted successfully!");
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        //document.getElementById('myform').reset();
        document.getElementById('myform').innerHTML = ''
        document.getElementById('message').innerText = response.message;
    } else if (xhr.readyState === 4) {
            alert("Error submitting form.");

        }
    }