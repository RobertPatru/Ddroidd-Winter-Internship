const allInputs = document.querySelectorAll('input');
const joinUsBtn = document.querySelector('.submit-btn');
const captcha = document.querySelector('.g-recaptcha');

joinUsBtn.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();

    let okay = true;
    let verifyCaptcha = false;
    const response = grecaptcha.getResponse();

    for (let i = 0; i < allInputs.length; i++) {
        if (i == 3)        // pass over the "Address Line 2"
            i = i + 1;

        if (allInputs[i].value == '') {     // the input is empty
            allInputs[i].style.border = '2px solid red';    // a red border will apear
            okay = false;
        }
    }

    if (response.length == 0) {     // if the response from captcha is empty
        captcha.style.border = '2px solid red';     // a red border will apear
    } else {
        verifyCaptcha = true;
    } 
  
    if (okay == true && verifyCaptcha == true) {    // if all the fiels are filled and captcha is verified
        location.href = "/last-page.html";
    }

    setTimeout((disableWarning), 2000);     // after two second remove the red border
}

function disableWarning() {
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].style.border = 'none';      
    }
    captcha.style.border = 'none';
}