function unlock() {
  document.body.classList.add('unlocking')
  setTimeout(function() {
    window.location.href = 'portfolio.html'
  }, 800)
}