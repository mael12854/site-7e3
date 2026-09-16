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

const reviewForm = document.getElementById('review-form');

if (reviewForm) {
  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = Number(reviewForm.querySelector('input[name="note"]:checked').value);
    const etoiles = '★'.repeat(note) + '☆'.repeat(5 - note);
    const commentaire = reviewForm.commentaire.value;
    const sujet = `Avis sur le site — ${note}/5`;
    const corps = `Note : ${etoiles} (${note}/5)\n\n${commentaire}`;
    const destinataire = reviewForm.dataset.mailto;
    window.location.href = `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
    reviewForm.classList.add('is-sent');
    reviewForm.reset();
  });
}
