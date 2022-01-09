const allInputs = document.querySelectorAll('input');
const joinUsBtn = document.querySelector('.submit-btn');
const captcha = document.querySelector('.g-recaptcha');

joinUsBtn.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();

    let okay = true;
    const response = grecaptcha.getResponse();

    for (let i = 0; i < allInputs.length; i++) {
        if (i == 3)
            i = i + 1;

        if (allInputs[i].value == '') {
            allInputs[i].style.border = '2px solid red';
            okay = false;
        }
    }

    if (response.length == 0) {
        captcha.style.border = '2px solid red';
    }

    setTimeout((disableWarning), 2000);
  
    if (okay == true) {
        location.href = "/last-page.html";
    }
}

function disableWarning() {
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].style.border = 'none';      
    }
    captcha.style.border = 'none';
}