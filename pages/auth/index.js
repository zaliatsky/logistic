import { useState } from 'react'
import styles from '../../front-end/styles/modules/auth.module.scss'
import SignInForm from '../../front-end/components/form/SignInForm'
import RegisterForm from '../../front-end/components/form/RegisterForm'
import {
  initialValuesSignin,
  initialValuesRegister,
  validationSchemaSignin,
  validationSchemaRegister,
} from '../../front-end/variables/form'

const Auth = () => {
  const [isRegister, changeFormType] = useState(false)

  const changeForm = () => {
    changeFormType(!isRegister)
  }

  return (
    <section className={styles.auth__wrapper}>
      <div className={styles.auth__holder} />
      <div className={styles.auth__form}>
        <h1 className={styles.auth__formHeader}>
          {isRegister ? 'Register' : 'Sign In'}
        </h1>
        {isRegister ? (
          <RegisterForm
            initialValues={initialValuesRegister}
            validationSchema={validationSchemaRegister}
            onClick={changeForm}
          />
        ) : (
          <SignInForm
            initialValues={initialValuesSignin}
            validationSchema={validationSchemaSignin}
            onClick={changeForm}
          />
        )}
      </div>
    </section>
  )
}

export default Auth
