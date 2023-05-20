export const keyboardShortcuts = (event) => {
  event.preventDefault()
  //   console.log(event)
  //   console.log(`Key pressed: ${event.key}`)

  switch (event.key) {
    case 'Up':
    case 'ArrowUp':
      console.log(`ArrowUp`)
      break
    case 'Down':
    case 'ArrowDown':
      break
    case 'Left':
    case 'ArrowLeft':
      break
    case 'Right':
    case 'ArrowRight':
      break
    case 'Enter':
      break
    case 'Esc':
    case 'Escape':
      break
    default:
      return
  }
}
