let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let number = document.getElementById("number");

decrease.addEventListener("click", () => {
    // Get the current value, decrease it by 1, and update the display
    let currentValue = parseInt(number.innerText); // Convert string to integer
    if (currentValue > 0) {
        number.innerText = currentValue - 1; // Subtract 1 from current value
    } else {
        alert("Value cannot be less than 0"); // Alert if trying to go below 0  
        number.innerText = 0;
    }
});


increase.addEventListener("click", () => {
    let currentValue = parseInt(number.innerText); // Convert string to integer
    number.innerText = currentValue + 1; // Add 1 to current value
});

reset.addEventListener("click", () => {
    number.innerText = 0; // Reset value to 0
});

window.addEventListener("keyup", (event) => {
    let currentValue = parseInt(number.innerText); // Convert string to integer
    if (event.key === "ArrowUp" || event.key === "+") {
        number.innerText = currentValue + 1; // Add 1 to current value
    } else if (event.key === "ArrowDown" || event.key === "-") {
        if (currentValue > 0) {
            number.innerText = currentValue - 1; // Subtract 1 from current value
        } else {
            alert("Value cannot be less than 0"); // Alert if trying to go below 0
            number.innerText = 0;
        }
    } else if (event.key === "r" || event.key === "R") {
        number.innerText = 0; // Reset value to 0
    }
});



let darkTheme = document.getElementById('dark-theme');
let lightTheme = document.getElementById('light-theme');

darkTheme.addEventListener('change', () => {
    if (darkTheme.checked) {
        document.body.classList.add('dark'); // Add dark class
        document.body.classList.remove('light'); // Remove light class
    }
});

lightTheme.addEventListener('change', () => {
    if (lightTheme.checked) {
        document.body.classList.add('light'); // Add light class
        document.body.classList.remove('dark'); // Remove dark class
    }
});


// TABS
let tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        // Get the target content ID from data-target attribute
        let target = tab.getAttribute('data-tab');
        // Hide all tab contents
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        // Show the target tab panel
        document.getElementById(target).classList.add('active');
    });
});


// SUBMIT USER FORM WITH VALIDATION
let userForm = document.getElementById('user-form'); // Get the form element
let errorMessage = document.querySelectorAll('error-message'); // Get the error message element

userForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission 
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = parseInt(document.getElementById('password').value);
    if (username === '' || email === '' || password === '') { // Simple validation
        alert('Please fill in all fields correctly.');
        return;
    }

    alert(`Form submitted successfully!\nUsername: ${username}\nEmail: ${email}\nPassword Length: ${password.toString().length} characters`);
    userForm.reset(); // Reset the form
});