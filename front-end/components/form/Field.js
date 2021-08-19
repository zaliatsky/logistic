import styles from '../../styles/helpers/auth.module.scss'
import { ErrorMessage, Field } from 'formik'

const FormField = ({ name, inputType, className, labelName }) => {
  return (
    <div className={styles.auth__formField}>
      <label htmlFor={name} className={styles.auth__formLabel}>
        {labelName}
      </label>
      <Field
        id={name}
        name={name}
        type={inputType}
        className={className}
        autoComplete={name}
      />
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
    </div>
  )
}

export default FormField
