// shows node
function onScroll(node) {
  let ticks = false
  let lastScrollY = window.scrollY

  const inner = (setNodeClass) => {
    if (!ticks) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        // Detect scrolling direction
        if (
          currentScrollY > lastScrollY &&
          currentScrollY > 1.25 * node.offsetHeight
        ) {
          // ToDo
          setNodeClass(" header-hidden")
        } else if (
          currentScrollY < lastScrollY ||
          currentScrollY <= 1.25 * node.offsetHeight
        ) {
          setNodeClass("")
        }
        lastScrollY = currentScrollY

        ticks = false
      })
      ticks = true
    }
  }
  return inner
}

export default onScroll
