import { useState } from 'react'
import RegisterForm from '../../front-end/components/form/RegisterForm'
import {
  initialValuesRegister,
  validationSchemaRegister,
} from '../../front-end/variables/form'
import styles from '../../front-end/styles/modules/auth.module.scss'

const Register = () => {
  return (
    <section className={styles.auth__wrapper}>
      <div className={styles.auth__holder} />
      <div className={styles.auth__form}>
        <h1 className={styles.auth__formHeader}>Register</h1>
        <RegisterForm
          initialValues={initialValuesRegister}
          validationSchema={validationSchemaRegister}
        />
      </div>
    </section>
  )
}

export default Register
