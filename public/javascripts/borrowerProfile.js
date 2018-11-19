document.addEventListener('DOMContentLoaded', async () => {
    const sendFileBtn = document.querySelector('.borrower-file-send');
    const uploadedFile = document.getElementById('borrower-file');
    const uploadForm = document.querySelector('.borrower-account-load-file');
    const payment = document.querySelector('.borrower-account-payments');
    const reqStatus =  document.querySelector('.borrower-table-info');


    const selectedFile = () => upload(uploadedFile.files[0]);

    sendFileBtn.addEventListener('click', selectedFile, false);


    const upload = async (file) => {
        let response = await fetch('/borrowers/file', {
            method: 'post',
            headers: {
                "Content-Type": "file/text; charset=utf-8",
            },
            body: file
        })
        //response = await response;
        if (response.status === 200) {
            uploadForm.style.display = 'none';
            payment.style.display = 'block';
            reqStatus.style.display = 'block';

        }

    };


});

