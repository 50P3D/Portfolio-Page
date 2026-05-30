const navItems = document.querySelectorAll('.nav-item')
const sections = document.querySelectorAll('section')

if (!document.cookie.includes('aa_welcome=seen') || 
    !document.cookie.includes('aa_access=granted')) {
  window.location.href = 'index.html'
}

navItems.forEach(function(item) {
  item.addEventListener('click', function() {
    
    // remove active from all nav items
    navItems.forEach(function(nav) {
      nav.classList.remove('active')
    })
    
    // hide all sections
    sections.forEach(function(section) {
      section.classList.add('hidden')
      section.classList.remove('active-section')
    })

    // show clicked section
    const target = item.getAttribute('data-section')
    document.getElementById(target).classList.remove('hidden')
    document.getElementById(target).classList.add('active-section')

    // set active nav item
    item.classList.add('active')
  })
})