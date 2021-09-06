import { Form, Formik } from 'formik'
import FormField from './Field'
import styles from '../../styles/helpers/auth.module.scss'
import Button from './Button'
import { NotificationManager } from 'react-notifications'
import env from '../../variables/env'
import userStore from '../../stores/user'
import Loader from '../loader'
import { useRouter } from 'next/router'

const SignInForm = ({ initialValues, validationSchema, onClick }) => {
  const router = useRouter()

  const loginHandler = ({ username, password }) => {
    // try {
    //   await request(`${env.apiUrl}/auth/login`, 'POST', {
    //     username,
    //     password,
    //   }).then(({ token = null, userId = null }) => {
    //     if (token) {
    //       userStore.login(token, userId)
    //       NotificationManager.success('Login success', '', 1000)
    //       // setTimeout(() => {
    //       //   router.push('/game')
    //       // }, 2000)
    //     }
    //   })
    // } catch (e) {
    //   NotificationManager.error(e.message, 'Sign in error', 8000)
    // }

    userStore.checkUser(username, password)

    // userStore.
  }

  const clearHandler = () => userStore.logout()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(fields) => loginHandler(fields)}
      render={({ errors, touched }) => (
        <Form>
          <FormField
            name="username"
            inputType="text"
            labelName="Username"
            className={
              'form-control' +
              (errors.username && touched.username ? ' is-invalid' : '')
            }
          />
          <FormField
            name="password"
            inputType="password"
            labelName="Password"
            className={
              'form-control' +
              (errors.password && touched.password ? ' is-invalid' : '')
            }
          />
          <div className={styles.auth__formBtnsWrapper}>
            <div className={styles.auth__formBtns}>
              <Button
                wrapperClass={`${styles.auth__formBtnWrapper} ${styles.signin}`}
                btnClass={styles.auth__formBtn}
                text="Sign In"
                btnType="submit"
                hasArrow={false}
                onClick={null}
                disabled={false}
              />

              <Button
                wrapperClass={`${styles.auth__formBtnWrapper} ${styles.register}`}
                btnClass={`${styles.auth__formBtn}`}
                text="Register"
                btnType="button"
                hasArrow={true}
                onClick={onClick}
                disabled={null}
              />
            </div>
            <button type="reset" onClick={clearHandler}>
              Reset Fields
            </button>
          </div>
          {/*{loading && <Loader />}*/}
        </Form>
      )}
    />
  )
}

export default SignInForm
