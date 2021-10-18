import { Form, Formik } from 'formik'
import { observer } from 'mobx-react'
import { NotificationManager } from 'react-notifications'
import Button from './Button'
import FormField from './Field'
import Loader from '../loader'
import globalStore from '../../stores/global'
import userStore from '../../stores/user'
import { useRouter } from 'next/router'
import styles from '../../styles/helpers/auth.module.scss'

const SignInForm = observer(({ initialValues, validationSchema, onClick }) => {
  const router = useRouter()
  const loginHandler = ({ username, password }) => {
    globalStore.changeLoader(true)
    userStore
      .checkUser(username, password)
      .then(({ token, userId, message }) => {
        if (token) {
          userStore.login(token, userId)
          NotificationManager.success('Login success', '', 1000)
          setTimeout(() => {
            router.push('/game')
          }, 2000)
        } else {
          NotificationManager.error(message, 'Sign in error', 8000)
        }
        globalStore.changeLoader(false)
      })
  }
  const clearHandler = () => userStore.logout()
  const { isLoading } = globalStore

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
                type="submit"
                hasArrow={false}
                disabled={false}
              />

              <Button
                wrapperClass={`${styles.auth__formBtnWrapper} ${styles.register}`}
                btnClass={`${styles.auth__formBtn}`}
                text="Register"
                type="button"
                hasArrow
                onClick={onClick}
                disabled={null}
              />
            </div>
            <button type="reset" onClick={clearHandler}>
              Reset Fields
            </button>
          </div>
          {isLoading && <Loader />}
        </Form>
      )}
    />
  )
})

export default SignInForm
