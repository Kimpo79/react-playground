const timers = {}

function debounce(fn, key, time) {
  if (timers[key]) clearTimeout(timers[key])
  timers[key] = setTimeout(fn, time)
}


export default debounce