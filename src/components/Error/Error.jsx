import styles from './Error.module.css'

const Error = ({ error }) => {
  return <p className={`${styles.error_text} ${error && styles._visible}`}>{error}</p>
}

export default Error
