function printerError(s) {
  const errors = s.split('').filter(c => /([n-z])/g.test(c))
  return errors.length ? errors.length + '/' + s.length : '0/' + s.length
}