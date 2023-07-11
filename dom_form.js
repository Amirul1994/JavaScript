// Write a JavaScript program that implements a "form" validation that displays 
// an error message if a required field is left empty when submitting the form. 

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Clear error messages
    var errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Validate required fields
    if (name === '') {
        showError('Name is required.');
    }

    if (email === '') {
        showError('Email is required.');
    }

    if (password === '') {
        showError('Password is required.');
    }

    // Submit the form if there are no errors
    if (errorMessages.innerHTML === '') {
        document.getElementById('myForm').submit();
    }
});

function showError(message) {
    var errorMessages = document.getElementById('errorMessages');
    var errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.textContent = message;
    errorMessages.appendChild(errorElement);
}; 

/*
The showError function takes a message parameter, which represents the error message that needs to be displayed.

It starts by retrieving the <div> element with the id 'errorMessages' using document.getElementById('errorMessages'). This element is assumed to be present in the HTML code and serves as a container for the error messages.

The next line var errorElement = document.createElement('p'); creates a new <p> (paragraph) element using the createElement method. This element will hold the error message.

errorElement.className = 'error'; assigns the CSS class 'error' to the newly created <p> element. This class can be defined in the CSS to style the error messages.

errorElement.textContent = message; sets the textContent property of the <p> element to the error message provided as the message parameter.

Finally, errorMessages.appendChild(errorElement); appends the error message element as a child of the <div> with the id 'errorMessages'. This causes the error message to be displayed on the webpage. */