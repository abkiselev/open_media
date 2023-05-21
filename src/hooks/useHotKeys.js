import { useEffect } from 'react'

export const useHotkeys = (keys, action, dependencies) => {
  const handleKeyPress = (event) => {
    if (keys.includes(event.key)) {
      event.preventDefault()
      return action()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [dependencies])
}
