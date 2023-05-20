import { useEffect, useState } from 'react'
import UseValidation from '../../hooks/useValidation'
import styles from './InputField.module.css'
import Error from '../Error/Error'

const InputField = ({ onSubmit, stateHistory }) => {
  const { values, handleValues, errors, isValuesValid, setInitialValues } = UseValidation()

  const [history, setHistory] = useState([])
  const [isHistoryVisible, setIsHistoryVisible] = useState(false)

  useEffect(() => {
    setInitialValues({ url: '' })
    setHistory(stateHistory)
  }, [])

  const handleHistoryClick = (link) => {
    setInitialValues({ url: link })
    setIsHistoryVisible(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(values.url)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.title}>Insert the link</p>

      <div className={styles.wrapper}>
        <input
          className={`${styles.field} ${errors.url && styles._invalid}`}
          type='text'
          name='url'
          placeholder='https://'
          value={values.url || ''}
          onChange={handleValues}
          autoComplete='none'
          onClick={() => setIsHistoryVisible(!isHistoryVisible)}
          onMouseLeave={() => setIsHistoryVisible(false)}
          onInput={() => setIsHistoryVisible(false)}
        />

        {!!history.length && (
          <ul
            className={`${styles.history} ${isHistoryVisible && styles.history_visible}`}
            onMouseOver={() => setIsHistoryVisible(true)}
            onMouseLeave={() => setIsHistoryVisible(false)}
          >
            {history.map((link) => (
              <li
                key={link}
                className={styles.history_link}
                onClick={() => handleHistoryClick(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        )}

        <button className={styles.button} type='submit' disabled={!isValuesValid.url}>
          <img src='/arrow.svg' alt='Submit' />
        </button>

        <img
          className={`${styles.error_img} ${errors.url && styles._visible}`}
          src='/error.svg'
          alt='Error'
        />
      </div>

      <Error error={errors.url || ''} />
    </form>
  )
}

export default InputField
