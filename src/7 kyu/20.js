// return masked string
function maskify(cc) {
  cc = cc.trim()
  return cc.length > 3 ? cc.replace(/./g, "#").slice(0, -4) + cc.slice(-4) : cc
}
