let loginAccount = []
document.getElementById('submit').addEventListener('click', function() {
    const name = document.getElementById('Name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const telNumber = document.getElementById('tel').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value; // Get gender value (male or female)
    const date = document.getElementById('date').value; // Get the selected date

  
    if (!name || !password || !email || !telNumber || !gender || !date) {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail address.");
        return;
    }

    const telPattern = /^\d+$/;
    if (!telPattern.test(telNumber)) {
        alert("Please enter a valid phone number (only numeric digits).");
        return;
    }

    const existingAccounts = JSON.parse(localStorage.getItem('loginAccount')) || [];
    const emailExists = existingAccounts.some(account => account.email === email);
    if (emailExists) {
        alert("An account with this email already exists. Please use a different email.");
    } else {
        const newAccount = {
            name: name,
            password: password,
            email: email,
            telNumber: telNumber,
            gender: gender,
            date: date 
        };
        existingAccounts.push(newAccount);
        localStorage.setItem('loginAccount', JSON.stringify(existingAccounts));
        alert("Account successfully created!");
        document.getElementById('foam').style.display = 'none';
        document.getElementById('bozx').style.display = 'block';
        document.getElementById('header').style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('login').addEventListener('click', function() {
        console.log("Login button clicked");
        const email = document.getElementById('againemail').value;
        const password = document.getElementById('againpasswords').value;
        if (!email || !password) {
            alert("Please fill in both fields.");
            return;
        }
        console.log("Entered email: ", email);
        console.log("Entered password: ", password);

        const existingAccounts = JSON.parse(localStorage.getItem('loginAccount')) || [];
        console.log("Stored accounts in localStorage: ", existingAccounts);
        const account = existingAccounts.find(account => account.email === email && account.password === password);
        if (account) {
            alert("Login successful!");
            document.getElementById('bozx').style.display = 'none';
            document.getElementById('box').style.display = 'block';
          
        } else {
            alert("Incorrect email or password. Please try again.");
        }
    });
});

function showcourse() {
    var coursebox = document.getElementById('coursebox');
    var box = document.getElementById('box');

    coursebox.style.display = 'block';
    box.style.display = 'none';
}
