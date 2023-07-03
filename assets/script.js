window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

window.addEventListener('DOMContentLoaded', function() {
  var backToTopBtn = document.getElementById('backToTopBtn');
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
