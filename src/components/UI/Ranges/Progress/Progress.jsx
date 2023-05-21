import styles from './Progress.module.css'

const Progress = ({ duration, progress, handleProgress }) => {
  const setProgressBarWidth = () => {
    if (duration === Infinity) {
      return progress
    } else {
      return progress === 0 ? 0 : progress / 2
    }
  }
  return (
    <div className={styles.wrapper}>
      <span className={styles.percent} style={{ width: `${setProgressBarWidth()}%` }} />
      <input
        className={styles.progress}
        type='range'
        name='progress'
        id='progress'
        min={0}
        max={Math.floor(duration)}
        step={0.01}
        value={progress}
        onChange={(e) => handleProgress(e.target.value)}
      />
    </div>
  )
}

export default Progress
