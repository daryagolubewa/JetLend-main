
document.addEventListener('DOMContentLoaded', () => {
    const borrowerFile = document.getElementById('borrower-file').files[0]
    const borrowerFileSend = document.getElementsByClassName('borrower-file-send')[0]

    borrowerFileSend.addEventListener('click', async (event) => {
        // event.preventDefault()
        let response = await fetch('/borrowers/file', {
            method: 'POST',
            // headers: {'Content-Type': 'multipart/form-data'},
            body: formData
        })
        alert(document.cookie)
        if (response.status === 200) {
            window.location = 'http://localhost:3000/borrowers/profile'
            // console.log(borrowerFile)
        }    
    })

})
