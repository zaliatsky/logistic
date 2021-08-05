import styles from '../../styles/auth.module.scss'
import { ErrorMessage, Field } from 'formik'

const FormField = ({ id, name, inputType, className, labelName }) => {
  return (
    <div className={styles.auth__formField}>
      <label htmlFor={id} className={styles.auth__formLabel}>
        {labelName}
      </label>
      <Field id={id} name={name} type={inputType} className={className} />
      <ErrorMessage
        name={name}
        component={'div'}
        className={'invalid-feedback'}
      />
    </div>
  )
}

export default FormField
