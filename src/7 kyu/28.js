const number = (busStops) => {
  let pplEntered = 0, pplLeft = 0
  busStops.forEach(([entered, left]) => {
    pplEntered += entered
    pplLeft += left
  })
  return pplEntered - pplLeft
}