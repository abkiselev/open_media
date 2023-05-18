import { useEffect, useRef, useState } from 'react'
import styles from './Player.module.css'
import Loader from '../Loader/Loader'
import axios from 'axios'
import { getTime } from '../../utils/getTime'

const Player = ({ setUrl }) => {
  const url = '../../src/assets/songs/macan-scirena-ivl-mp3.mp3'
  // const url = 'http://localhost:3000/src/assets/songs/macan-scirena-ivl-mp3.mp3'
  // const url = 'https://ru.drivemusic.me/pop_music/741759-aleks-ataman-amp-finik.finya-ojjojjojj-ty-govorila.html'
  // const url = 'https://mp3uks.ru/mp3/files/macan-scirena-ivl-mp3.mp3'

  // const url = 'https://c5.radioboss.fm:18084/stream'

  // const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3'
  // const url =
  //   'https://d.lalal.ai/media/split/ebf6a7a0-2d14-4761-a898-3fc2100fd6a8/bcd093a8-7cf1-4178-a7b1-9a9d00a5625e/no_vocals'

  // const [audio, setAudio] = useState(null)

  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.3)

  const audio = useRef()

  const handlePlay = () => {
    if (isPlaying) {
      audio.current.pause()
    } else {
      audio.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleProgress = (value) => {
    audio.current.currentTime = value
  }

  const handleVolume = (value) => {
    audio.current.volume = value
    setVolume(value)
  }

  const onLoaded = (e) => {
    setDuration(e.target.duration)
    audio.current.volume = volume
    setIsLoading(false)
  }

  const handleBack = () => {
    if (isPlaying) {
      audio.current.pause()
    }

    setUrl('')
  }

  // useEffect(() => {
  //   getAudioBuffer1(url)
  // }, [])

  // useEffect(() => {
  //   isPlaying && getAudioBuffer(url)
  // }, [isPlaying])

  // async function getAudioBuffer1() {
  //   const res = await axios.get(url)
  //   console.log(res)
  // }

  // function getAudioBuffer() {
  //   // const audio1 = new Audio()
  //   const context = new AudioContext()
  //   const analyser = context.createAnalyser()

  //   // метод URL.createObjectURL() создает DOMString, содержащий URL с указанием на объект, заданный как параметр
  //   // он позволяет загружать файлы из любого места на жестком диске
  //   // время жизни URL - сессия браузера
  //   audio.current.src = url

  //   // определяем источник звука
  //   const source = context.createMediaElementSource(audio.current)

  //   // подключаем к источнику звука анализатор
  //   source.connect(analyser)

  //   // подключаем к анализатору "выход" звука - акустическая система устройства
  //   analyser.connect(context.destination)

  //   // запускаем воспроизведение
  //   // audio.current.play()
  //   console.log(context)
  // }

  // console.log(progress)

  return (
    <section className={styles.wrapper}>
      <button type="button" className={styles.back} onClick={handleBack}>
        &larr; Back
      </button>

      <div className={styles.widget}>
        {isLoading && <Loader />}

        <button className={styles.play} onClick={handlePlay}>
          {isPlaying ? <img src="/pause.svg" alt="Play" /> : <img src="/play.svg" alt="Play" />}
        </button>

        <input
          className={styles.progress}
          type="range"
          name="progress"
          id="progress"
          min={0}
          max={duration}
          step={0.01}
          value={progress}
          onChange={(e) => handleProgress(e.target.value)}
        />

        <div className={styles.addings}>
          <span className={styles.clock}>{getTime(progress)}</span>

          <input
            className={styles.volume}
            type="range"
            name="volume"
            id="volume"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(e) => handleVolume(e.target.value)}
          />
        </div>

        <audio
          ref={audio}
          src={url}
          onLoadedData={(e) => onLoaded(e)}
          onTimeUpdate={(e) => setProgress(e.target.currentTime)}
        >
          Your brouser doesn't support the <code>audio</code>.
        </audio>
      </div>
    </section>
  )
}

export default Player
