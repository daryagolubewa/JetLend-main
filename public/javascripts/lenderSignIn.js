document.addEventListener('DOMContentLoaded', () => {
    const btnSbm = document.getElementById('btn-submit');
    const errorMessage = document.getElementById('lender-sign-up-error');

    btnSbm.addEventListener('click', async () => {
        const lenderEmail = document.getElementById('lender-email').value;
        const lenderPassword = document.getElementById('lender-password').value;

        let response = await fetch('/lenders/enter', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: lenderEmail, 
                password: lenderPassword})
        });

        if (response.status === 200) {
            window.location = 'http://localhost:3000' 


        } else {
            response = await response.text();
            errorMessage.innerText = response;
            errorMessage.style.display = 'block';
        }
    });
});