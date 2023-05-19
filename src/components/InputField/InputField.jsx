import { useEffect } from 'react'
import UseValidation from '../../hooks/useValidation'
import styles from './InputField.module.css'
import Error from '../Error/Error'

const InputField = ({ onSubmit }) => {
  const { values, handleValues, errors, isValuesValid, setInitialValues } = UseValidation()

  useEffect(() => {
    setInitialValues({ url: '' })
  }, [])

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
          type="text"
          name="url"
          placeholder="https://"
          value={values.url || ''}
          onChange={handleValues}
        />

        <button className={styles.button} type="submit" disabled={!isValuesValid.url}>
          <img src="/arrow.svg" alt="Submit" />
        </button>

        <img className={`${styles.error_img} ${errors.url && styles._visible}`} src="/error.svg" alt="Error" />
      </div>

      <Error error={errors.url || ''} />
    </form>
  )
}

export default InputField
