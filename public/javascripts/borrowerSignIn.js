document.addEventListener('DOMContentLoaded', () => {
    const btnSbm = document.getElementById('btn-submit');
    const errorMessage = document.getElementById('borrower-sign-up-error');

    btnSbm.addEventListener('click', async () => {
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
            window.location('http://localhost:3000')
        } else {
            response = await response.text();
            errorMessage.innerText = response;
            errorMessage.style.display = 'block';
        }
    });
});