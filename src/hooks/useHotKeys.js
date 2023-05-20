import { useEffect } from 'react'

export const useHotkeys = (keys, action) => {
  const handleKeyPress = (event) => {
    if (keys.includes(event.key)) {
      action()
    }
  }

}
