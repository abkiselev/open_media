import { useRef, useState } from 'react'
import styles from './Player.module.css'
import Loader from '../Loader/Loader'
import { getTime } from '../../utils/getTime'
import Volume from '../UI/Ranges/Volume/Volume'
import Progress from '../UI/Ranges/Progress/Progress'
import PlayButton from '../UI/Buttons/PlayButton/PlayButton'
import BackButton from '../UI/Buttons/BackButton/BackButton'
import Clock from '../Clock/Clock'
import Error from '../Error/Error'

const Player = ({ setUrl, url }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.3)

  const audioRef = useRef()

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleOnEnded = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  const handleProgress = (value) => {
    audioRef.current.currentTime = value
  }

  const handleVolume = (value) => {
    audioRef.current.volume = +value
    setVolume(+value)
  }

  const handleLoaded = (e) => {
    setDuration(e.target.duration)
    audioRef.current.volume = volume
    setIsLoading(false)
    handlePlay()
  }

  const handleError = (e) => {
    setError(`Unable lo load resource... ${e.target.error.message}`)
    setIsLoading(false)
  }

  const handleBack = () => {
    if (isPlaying) {
      audioRef.current.pause()
    }

    setUrl('')
  }

  return (
    <section className={styles.wrapper}>
      <BackButton handleBack={handleBack} />

      <div className={`${styles.widget} ${(isLoading || error) && styles._disabled}`}>
        {isLoading && <Loader />}

        <PlayButton isPlaying={isPlaying} handlePlay={handlePlay} />

        <Progress duration={duration} progress={progress} handleProgress={handleProgress} />

        <div className={styles.addings}>
          <Clock time={progress} />
          <Volume volume={volume} handleVolume={handleVolume} />
        </div>

        <audio
          ref={audioRef}
          src={url}
          onLoadedData={(e) => handleLoaded(e)}
          onTimeUpdate={(e) => setProgress(e.target.currentTime)}
          onEnded={handleOnEnded}
          onError={(e) => handleError(e)}
        >
          Your brouser doesn't support the <code>audio</code>.
        </audio>
      </div>

      <Error error={error} />
    </section>
  )
}

export default Player
