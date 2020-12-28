// const times = x => f => {
//   if (x > 0) {
//     f()
//     times (x - 1) (f)
//   }
// }

// // use it
// times (3) (() => console.log('hi'))


const times = n => f => {
  let iter = i => {
    if (i === n) return
    f (i)
    iter (i + 1)
  }
  return iter (0)
}

times (3) (i => console.log(i, 'hi'))