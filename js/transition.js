function unlock(destination) {
  document.body.classList.add('unlocking')
  setTimeout(function() {
    window.location.href = destination
  }, 800)
}