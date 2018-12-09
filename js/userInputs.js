'use strict'
// validating user inputs
// never trust user input

// it is vital to validate user input before sending it to a server(and again once it arrives there, but lets take things one step at a time)

// validation can be as simple as making sure that the type of data is correct(number vs.string, valid email address; etc); it can also be more complex-checking for password strength, for example, parsing a comment to make sure it contain no URLs.

// during input

const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

passwordInput.addEventListener('input', ($event) => {
if ($event.target.value.length >=6 && $event.target.value.length <=12) {
    submitButton.removeAttribute('disabled');
} else  {
    submitButton.setAttribute('disabled', 'true');
}
});

// definition of attribute:
// The setAttribute() method adds the specified attribute to an element, and gives it the specified value. 

// If the specified attribute already exists, only the value is set/changed.

// Note: Although it is possible to add the style attribute with a value to an element with this method, it is recommended that you use properties of the Style object instead for inline styling, because this will not overwrite other CSS properties that may be specified in the style attribute:

// problem:
//  after input
// add blur event listener to the confirmPassword element.

// compare the value properties of both inputs.

// if they are the same, set the border styles to thin solid green and set the display style of errorMsg so that it disappears 

// if they are different, set the border styles to thin solid red set the display style of errorMsg so that it appears
