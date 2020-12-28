
const times = n => f => {
  let iter = i => {
    if (i === n) return
    f (i)
    iter (i + 1)
  }
  return iter (0)
}

times (10) (i => console.log(i, 'Star It Ltd'))