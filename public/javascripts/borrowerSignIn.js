document.addEventListener('DOMContentLoaded', () => {
    const btnSbm1 = document.getElementById('btn-submit-1');
    const errorMessage = document.getElementsByClassName('borrower-sign-up-error')[0];

    btnSbm1.addEventListener('click', async () => {
        const borrowerEmail = document.getElementById('borrower-email').value;
        const borrowerPassword = document.getElementById('borrower-password').value;

        let response = await fetch('/borrowers/enter', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({email: borrowerEmail, password: borrowerPassword})
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