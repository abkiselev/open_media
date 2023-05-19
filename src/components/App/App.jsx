import { useState } from 'react'
import InputField from '../InputField/InputField'
import Player from '../Player/Player'
import { useHistoryStore } from '../../store/store'

function App() {
  const history = useHistoryStore((state) => state.history)
  const addToHistory = useHistoryStore((state) => state.addToHistory)
  const [url, setUrl] = useState('')

  console.log(history)

  const handleSubmit = (value) => {
    setUrl(value)
    addToHistory(value)
  }

  return <>{url ? <Player setUrl={setUrl} url={url} /> : <InputField onSubmit={handleSubmit} history={history} />}</>
}

export default App
