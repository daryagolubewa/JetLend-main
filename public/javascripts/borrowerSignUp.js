document.addEventListener('DOMContentLoaded', () => {
    const btnSbm = document.getElementById('btn-submit');
    const form = document.getElementById('new-borrower-form');
    const message = document.getElementById('borrower-email-confirmation-message');
    const errorMessage = document.getElementById('borrower-sign-up-error');

    btnSbm.addEventListener('click', async () => {
        const borrowerName = document.getElementById('borrower-name').value;
        const borrowerEmail = document.getElementById('borrower-email').value;
        const borrowerPassword = document.getElementById('borrower-password').value;
        const borrowerPhone = document.getElementById('borrower-phone').value;

        let response = await fetch('/borrowers/add', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({name: borrowerName, email: borrowerEmail, password: borrowerPassword, phone: borrowerPhone})
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