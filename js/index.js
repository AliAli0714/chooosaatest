let buttons = document.querySelectorAll('button[id^="open-modal-btn"]') 

for (let button of buttons) {
  button.addEventListener('click', function() {
    document.querySelector("#my-modal").classList.add('open')
  })
}
 
 // Закрыть модальное окно при клике вне его
  document.querySelector("#my-modal .modal-body").addEventListener('click', event => {
      event._isClickWithInModal = true;
  });
  document.getElementById("my-modal").addEventListener('click', event => {
      if (event._isClickWithInModal) return;
      event.currentTarget.classList.remove('open');
  });

  document.getElementById("close-btn").addEventListener("click", function() {
      document.getElementById("my-modal").classList.remove("open")
  });