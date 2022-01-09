const allInputs = document.querySelectorAll('input');
const joinUsBtn = document.querySelector('.submit-btn');

joinUsBtn.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();
    let okay = true;

    for (let i = 0; i < allInputs.length; i++) {
        if (i == 3)
            i = i + 1;

        if (allInputs[i].value == '') {
            allInputs[i].style.border = '2px solid red';
            okay = false;
        }
        

        console.log(okay);
    }

    setTimeout((disableWarning), 2000);

    if (okay == true) {
        console.log('toate conditiile au fost indeplinite');
        location.href = "/last-page.html";
    }
    else {
        console.log('NU AU FOST INDEPLINITE CONDITIILE');

    }
}

function disableWarning() {
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].style.border = 'none';
    }

    const response = grecaptcha.getResponse();
    alert(response);
}


document.querySelector('.g-recaptcha').addEventListener('click', function() {
    const response = grecaptcha.getResponse();
    alert(response);
});