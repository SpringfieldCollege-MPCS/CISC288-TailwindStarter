
document.addEventListener("DOMContentLoaded", function() {
    let el = document.querySelector('#toggle-main-menu');
    el.onclick = function() {
        let hidden_menu = document.querySelector('#mobile-menu');
        hidden_menu.classList.toggle('hidden');
      }
    
});