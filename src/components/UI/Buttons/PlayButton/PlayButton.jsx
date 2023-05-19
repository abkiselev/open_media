import styles from './PlayButton.module.css'

const PlayButton = ({ isPlaying, handlePlay }) => {
  return (
    <button className={styles.btn} onClick={handlePlay}>
      {isPlaying ? <img src="/pause.svg" alt="Pause" /> : <img src="/play.svg" alt="Play" />}
    </button>
  )
}

export default PlayButton
