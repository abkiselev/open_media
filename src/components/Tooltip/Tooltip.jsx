import styles from './Tooltip.module.css'

const Tooltip = ({ isVisible, text, setIsToolTipVisible }) => {
  return (
    <section className={`${styles.tooltip} ${isVisible && styles._visible}`}>
      <div className={styles.wrapper}>
        <img src='/warning.svg' alt='Warning' />
        <div className={styles.content}>
          <p className={styles.title}>Warning</p>
          <p className={styles.text}>{text}</p>
        </div>
        <button type='button' className={styles.close_btn}>
          <img src='/close.svg' alt='Close' onClick={() => setIsToolTipVisible(false)} />
        </button>
      </div>
    </section>
  )
}

export default Tooltip
