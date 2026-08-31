const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nom = contactForm.nom.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;
    const sujet = `Message du site — ${nom}`;
    const corps = `De : ${nom} (${email})\n\n${message}`;
    const destinataire = contactForm.dataset.mailto;
    window.location.href = `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
    contactForm.classList.add('is-sent');
    contactForm.reset();
  });
}
