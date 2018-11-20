
document.addEventListener('DOMContentLoaded', () => {
    const borrowerFile = document.getElementById('borrower-file').files[0];
    const borrowerFileSend = document.getElementsByClassName('borrower-file-send')[0];

    borrowerFileSend.addEventListener('click', async () => {
        let response = await fetch('/borrowers/file', {
            method: 'POST',
            body: formData
        });
        if (response.status === 200) {
            window.location = 'http://localhost:3000/borrowers/profile'
        }    
    })

});

