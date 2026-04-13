const VALID_TOKENS = ['li', 'gh', 'nfc']

function getToken() {
  return new URLSearchParams(window.location.search).get('ref')
}

function hasCookie() {
  return document.cookie.includes('aa_access=granted')
}

function setCookie() {
  document.cookie = 'aa_access=granted; max-age=604800; path=/'
}



const token = getToken()

if (VALID_TOKENS.includes(token)) {
  setCookie()
  setTimeout(function() {
    unlock('portfolio.html')
  }, 2500)
} else if (hasCookie()) {
  setTimeout(function() {
    unlock('portfolio.html')
  }, 2500)
} else {
  setTimeout(function() {
    unlock('locked.html')
  }, 6000)
}