document.addEventListener('DOMContentLoaded', () => {
    const btnSbm1 = document.getElementById('btn-submit-1');
    const errorMessage = document.getElementsByClassName('borrower-sign-up-error')[0];

    btnSbm1.addEventListener('click', async () => {
        const borrowerEmail = document.getElementById('borrower-email').value;
        const borrowerPassword = document.getElementById('borrower-password').value;

        let response = await fetch('/borrowers/enter', {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({email: borrowerEmail, password: borrowerPassword})
        });
        console.log(response)
        if (response.status === 200) {
            console.log(document.cookie)
            // await response.redirect('/')
            // let resp = await fetch('/borrowers/profile', {
                // credentials: 'same-origin'
            // });

            window.location.assign('http://localhost:3000/borrowers/red')
        } else {
            response = await response.text();
            errorMessage.innerText = response;
            errorMessage.style.display = 'block';
        }
    });
});