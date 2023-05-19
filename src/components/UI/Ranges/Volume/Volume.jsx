import styles from './Volume.module.css'

const Volume = ({ volume, handleVolume }) => {
  return (
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
  )
}

export default Volume
