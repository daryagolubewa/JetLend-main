document.addEventListener('DOMContentLoaded', () => {
    const btnSbm = document.getElementById('btn-submit');
    const form = document.getElementById('new-borrower-form');

    btnSbm.addEventListener('click', async () => {
        const borrowerName = document.getElementById('borrower-name').value;
        const borrowerEmail = document.getElementById('borrower-email').value;
        const borrowerPhone = document.getElementById('borrower-phone').value;
        //const list = document.getElementsByClassName('list');

        let response = await fetch('/borrowers/add', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({name: borrowerName, breed: borrowerEmail, age: borrowerPhone})
        });
        // response = await response;
        if (response.status === 200) {
            let =
            await response.json();
            // let templateString = document.getElementById('horseTemplate').innerHTML;
            // let template = Handlebars.compile(templateString);
            // let html = template(horse);
            // list[0].insertAdjacentHTML( 'beforeend', html);

            form.style.display = 'none';
        }
    });
});