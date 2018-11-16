document.addEventListener('DOMContentLoaded', () => {
    const btnSbm = document.getElementById('btn-submit');
    const form = document.getElementById('new-lender-form');
    const message = document.getElementsByClassName('lender-email-confirmation-message');

    const errorMessage = document.getElementsByClassName('lender-sign-up-error');

console.log("btnSbm = ", btnSbm )


    btnSbm.addEventListener('click', async () => {
        const lenderName = document.getElementById('lender-name').value;
        const lenderEmail = document.getElementById('lender-email').value;
        const lenderPassword = document.getElementById('lender-password').value;
        const lenderPhone = document.getElementById('lender-phone').value;
        const lenderPassport = document.getElementById('lender-passport').value;


        let response = await fetch('/lenders/add', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
             body:   JSON.stringify({
             name:   lenderName,
             email:  lenderEmail, 
             password: lenderPassword, 
             passport_number:  lenderPassport,
             phone:  lenderPhone })
        });

        if (response.status === 200) {
            form.style.display = 'none';
            message.style.display = 'block';
        } else {
            response = await response.text();
            errorMessage.innerText = response;
            errorMessage.style.display = 'block';
        }
    });
});