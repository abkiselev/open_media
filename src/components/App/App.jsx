import { useState } from 'react'
import InputField from '../InputField/InputField'
import Player from '../Player/Player'

function App() {
  const [url, setUrl] = useState('')

  const handleSubmit = (value) => {
    setUrl(value)
  }

  return <>{url ? <Player setUrl={setUrl} url={url} /> : <InputField onSubmit={handleSubmit} />}</>
}

export default App
