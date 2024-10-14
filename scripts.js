const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const spinner = document.getElementById('spinner');

function validateForm() {
    const emailValid = emailInput.validity.valid;
    const subjectValid = subjectInput.value.length >= 5;
    const messageValid = messageInput.value.length >= 5;

    submitBtn.disabled = !(emailValid && subjectValid && messageValid);
}

[emailInput, subjectInput, messageInput].forEach(input => {
    input.addEventListener('input', validateForm);
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    spinner.style.display = 'block';

    // Simulamos el envío del formulario con un retraso de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Aquí iría el código para enviar el formulario a un servidor

    alert('Formulario enviado con éxito!');
    form.reset();
    spinner.style.display = 'none';
    submitBtn.disabled = true;
});