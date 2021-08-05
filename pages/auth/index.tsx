import { useState } from 'react'
import styles from '../../front-end/styles/auth.module.scss'
import SignInForm from '../../front-end/components/form/SignInForm'
import RegisterForm from '../../front-end/components/form/RegisterForm'
import {
  initialValuesSignin,
  initialValuesRegister,
} from '../../front-end/variables/form'
console.log(initialValuesSignin)

const Auth = () => {
  const [isRegister, setFormType] = useState(false)
  console.log('is sign up', isRegister)

  const changeForm = (event) => {
    setFormType(!isRegister)
    console.log('here is event', event)
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
            onClick={changeForm}
          />
        ) : (
          <SignInForm
            initialValues={initialValuesSignin}
            onClick={changeForm}
          />
        )}
      </div>
    </section>
  )
}

export default Auth
