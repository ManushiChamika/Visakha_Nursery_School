// contact-popup.js
function openContactPopup() {
  fetch('contact-popup.html')
    .then(res => res.text())
    .then(html => {
      const popupContainer = document.getElementById('contactPopupContainer');
      popupContainer.innerHTML = html;
      popupContainer.classList.remove('hidden');
    });
}

function closeContactPopup() {
  const popupContainer = document.getElementById('contactPopupContainer');
  popupContainer.classList.add('hidden');
  popupContainer.innerHTML = '';
}
