document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (validateForm(form)) {
                window.location.href = "dashboard.html";  // Redirect on success
            } else {
                form.classList.add("was-validated");  // Show validation feedback
            }
        });
    }

    // Function to show alert
    function showAlert(message) {
        let alertBox = document.getElementById("customAlert");
        alertBox.innerHTML = `<strong>Warning!</strong> ${message} <button type="button" class="btn-close" onclick="closeAlert()"></button>`;
        alertBox.classList.remove("d-none");  // Show alert
    }

    // Function to close the alert
    function closeAlert() {
        document.getElementById("customAlert").classList.add("d-none");  // Hide alert
    }

    // Validate the form and check password matching
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll("input");

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.classList.add("is-invalid");  // Add invalid class if invalid
                input.classList.remove("is-valid");  // Remove valid class if invalid
            } else {
                input.classList.add("is-valid");  // Add valid class if valid
                input.classList.remove("is-invalid");  // Remove invalid class if valid
            }
        });

        // Additional password matching validation
        const password = form.querySelector("#password");
        const confirmPassword = form.querySelector("#confirmPassword");

        if (password && confirmPassword) {
            if (password.value !== confirmPassword.value) {
                isValid = false;
                confirmPassword.classList.add("is-invalid");
                confirmPassword.classList.remove("is-valid");
                showAlert("Password fields do not match!");  // Show alert if passwords do not match
            } else {
                confirmPassword.classList.add("is-valid");
                confirmPassword.classList.remove("is-invalid");
            }
        }

        return isValid;
    }

    // Real-time password validation (with immediate alert)
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    password.addEventListener('input', checkPasswordsMatch);
    confirmPassword.addEventListener('input', checkPasswordsMatch);

    function checkPasswordsMatch() {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        if (password.value && confirmPassword.value && password.value === confirmPassword.value) {
            confirmPassword.classList.remove("is-invalid");
            confirmPassword.classList.add("is-valid");
            closeAlert(); // Close the alert immediately when passwords match
        } else {
            confirmPassword.classList.remove("is-valid");
            confirmPassword.classList.add("is-invalid");
            showAlert("Password fields do not match!"); // Show alert if passwords don't match
        }
    }

    // Automatically validate each input as the user types
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(input => {
        input.addEventListener("input", function () {
            if (input.checkValidity()) {
                input.classList.add("is-valid");
                input.classList.remove("is-invalid");
            } else {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
            }
        });
    });
});
