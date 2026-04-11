async function getIP() {
  const response = await fetch('https://api.ipify.org?format=json')
  const data = await response.json()
  return data.ip
}

function hashIP(ip) {
  const nums = ip.split('.')
  return nums.reduce((acc, num) => acc + parseInt(num), 0)
}

function generatePattern(seed) {
  const size = 20 + (seed % 30)
  const hue = seed % 360

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><circle cx='${size/2}' cy='${size/2}' r='1.5' fill='hsl(${hue},15%,85%)' opacity='0.06'/></svg>`

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}




async function initBackground() {
  const ip = await getIP()
  const seed = hashIP(ip)
  const pattern = generatePattern(seed)

  document.body.style.background = `#080808 ${pattern}`
  document.body.style.backgroundRepeat = 'repeat'
}

initBackground()