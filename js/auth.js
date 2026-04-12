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




function unlock() {
  window.location.href = 'portfolio.html'
}

const token = getToken()

if (VALID_TOKENS.includes(token)) {
  setCookie()
  unlock()
} else if (hasCookie()) {
  unlock()
}