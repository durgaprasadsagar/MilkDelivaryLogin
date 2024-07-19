document.getElementById('new-user').addEventListener('click', function() {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('register-page').classList.remove('hidden');
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('register-email').value;
    const aadhar = document.getElementById('aadhar').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you can add code to submit the form data to the server
    // For now, we'll just log the values
    console.log({
        firstName,
        lastName,
        dob,
        email,
        aadhar,
        phone,
        password
    });

    // Redirect back to login page
    document.getElementById('register-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
});