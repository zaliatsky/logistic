import { useState } from 'react'
import styles from '../../front-end/styles/modules/auth.module.scss'
import SignInForm from '../../front-end/components/form/SignInForm'
import {
  initialValuesSignin,
  validationSchemaSignin,
} from '../../front-end/variables/form'

const Login = () => {
  return (
    <section className={styles.auth__wrapper}>
      <div className={styles.auth__holder} />
      <div className={styles.auth__form}>
        <h1 className={styles.auth__formHeader}>
          Sign In
        </h1>
        <SignInForm
          initialValues={initialValuesSignin}
          validationSchema={validationSchemaSignin}
        />
      </div>
    </section>
  )
}

export default Login
