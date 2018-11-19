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

//     const sendFileBtn = document.querySelector('.borrower-file-send');
//     const uploadedFile = document.getElementById('borrower-file');
//     const uploadForm = document.querySelector('.borrower-account-load-file');
//     const payment = document.querySelector('.borrower-account-payments');
//     const reqStatus =  document.querySelector('.borrower-table-info');


//     const selectedFile = () => upload(uploadedFile.file[0]);

//     sendFileBtn.addEventListener('click', selectedFile, false);


//     const upload = async (file) => {
//         let response = await fetch('/borrowers/profile', {
//             method: 'post',
//             headers: {
//                 "Content-Type": "file/text; charset=utf-8",
//             },
//             body: file
//         })
//     };

//         if (response.status === 200) {
//             uploadForm.style.display = 'none';
//             payment.style.display = 'block';
//             reqStatus.style.display = 'block';

//         }


});

