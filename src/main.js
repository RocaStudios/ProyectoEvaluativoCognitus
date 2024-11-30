// Contador de visitas
let visitas = 0;
const contadorElemento = document.getElementById('clickCount');
const statsButton = document.getElementById('statsButton');

const contactForm = document.querySelector('.form'); //toma la clase .form, si se usara ByClassName retornaria un arreglo seria (para acceder a su primer indice): ocument.querySelector('form')[0]
const formMessage = document.getElementById('formMessage');

// Incrementar visitas y mostrarlo
statsButton.addEventListener('click', () => {
    visitas++;
    contadorElemento.textContent = `Contador de visitas: ${visitas}`;
//    console.log(visitas)
});

// Manejo del formulario
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir envío del formulario por defecto


    formMessage.textContent = '¡Mensaje enviado con éxito!';
    formMessage.style.color = 'lightgreen';
    contactForm.reset(); // Limpiar el formulario después de enviarlo

    //validacion parcialmente innecesaria

    // Obtener los valores de los inputs
    // const name = contactForm.querySelector('input[type="text"]').value.trim(); //toma el valor con el type = text dentro de contactform
    // const email = contactForm.querySelector('input[type="Email"]').value.trim();
    // const message = contactForm.querySelector('textarea').value.trim();
    // if (name && email && message) { // validacion
    //     formMessage.textContent = '¡Mensaje enviado con éxito!';
    //     formMessage.style.color = 'lightgreen';
    //     contactForm.reset(); // Limpiar el formulario después de enviarlo
    // }
    
});