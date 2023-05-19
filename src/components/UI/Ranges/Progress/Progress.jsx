import styles from './Progress.module.css'

const Progress = ({ duration, progress, handleProgress }) => {
  return (
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
  )
}

export default Progress
