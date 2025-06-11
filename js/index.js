const btn = document.getElementById('form-button');

document.getElementById('contact-form')

    .addEventListener('submit', function (event) {
        debugger;
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_36rbeuw';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Correo enviado ✔';
                document.getElementById('contact-form').reset();
            }, (err) => {
                btn.value = 'Reintentar';
                alert(JSON.stringify(err));
            });
    });