document.addEventListener('DOMContentLoaded', () => {
    const btnSbm = document.getElementById('btn-submit1');
    const applForm = document.getElementById('borrower-application');
    
    const appl = document.querySelector('.borrower-application-request');


    btnSbm.addEventListener('click', async () => {
        const firstName = document.getElementById('borrower-first-name').value;
        const lastName = document.getElementById('borrower-last-name').value;
        const patName = document.getElementById('borrower-paternity-name').value;
        const birthDate = document.getElementById('borrower-datebirth').value;
        const passportNum = document.getElementById('borrower-passport-number').value;
        const org = document.getElementById('borrower-org').value;
        const releaseDate = document.getElementById('borrower-date-release').value;
        const taxNum = document.getElementById('borrower-tax-number').value;

        let response = await fetch('/borrowers/application', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                paternity_name: patName,
                date_birth: birthDate,
                passport_number: passportNum,
                organization: org,
                release_date: releaseDate,
                tax_number: taxNum
            })
        });

        if (response.status === 200) {
            applForm.style.display = 'none';
            appl.style.display = 'block';
            window.location = 'http://localhost:3000/borrowers/profile'
        }
    });


});