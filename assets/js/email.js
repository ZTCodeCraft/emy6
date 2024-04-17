const btn = document.getElementById('button');

function closeModal() {
    const modal = document.getElementById('emailModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_oype30e';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Send Email';
      document.getElementById('emailModal').classList.add('show');
      document.getElementById('emailModal').style.display = 'block';
    }, (err) => {
      btn.innerText = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// Close the modal when the "Close" button is clicked
document.getElementById('closeModalButton').addEventListener('click', closeModal);

// Close the modal when clicking outside the modal content
document.getElementById('emailModal').addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal();
  }
});