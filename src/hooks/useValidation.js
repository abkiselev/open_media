import { useEffect, useState } from 'react'
import { urlRegexp } from '../utils/regexp'

function UseValidation() {
  const [values, setValues] = useState({})
  const [isValuesValid, setIsValuesValid] = useState({})
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  function handleValues(e) {
    setValues({ ...values, [e.target.name]: e.target.value })

    switch (e.target.name) {
      case 'url':
        validateUrl(e.target.value)
        break
      default:
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage })
        setIsValuesValid({ ...isValuesValid, [e.target.name]: e.target.validity.valid })
        break
    }
  }

  function setInitialValues(initialInputs) {
    setValues(initialInputs)

    const errs = {}
    const valids = {}

    Object.entries(initialInputs).forEach(([key, value]) => {
      errs[key] = ''
      valids[key] = initialInputs[key].length > 0
    })

    setErrors(errs)
    setIsValuesValid(valids)
  }

  useEffect(() => {
    if (
      Object.values(isValuesValid).every((i) => i === true) &&
      Object.values(isValuesValid).length !== 0
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [isValuesValid])

  function validateUrl(inputText) {
    if (!String(inputText).toLowerCase().match(urlRegexp) || inputText.length === 0) {
      setErrors({
        ...errors,
        url: 'Looks like there is an error in url. Make sure it starts with "https://"',
      })
      setIsValuesValid({ ...isValuesValid, url: false })
    } else {
      setErrors({ ...errors, url: '' })
      setIsValuesValid({ ...isValuesValid, url: true })
    }
  }

  return {
    isFormValid,
    values,
    handleValues,
    isValuesValid,
    errors,
    setInitialValues,
    setErrors,
  }
}

export default UseValidation
