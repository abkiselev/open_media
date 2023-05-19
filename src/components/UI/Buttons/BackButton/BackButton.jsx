import styles from './BackButton.module.css'

const BackButton = ({ handleBack }) => {
  return (
    <button type="button" className={styles.back} onClick={handleBack}>
      &larr; Back
    </button>
  )
}

export default BackButton
