import { Form, Formik } from 'formik'
import { NotificationManager } from 'react-notifications'
import FormField from './Field'
import styles from '../../styles/helpers/auth.module.scss'
import Button from './Button'
import userStore from '../../stores/user'
import Loader from '../loader'

const RegisterForm = ({ initialValues, validationSchema, onClick }) => {
  const registerHandler = async ({ username, password }) => {
    userStore.registerUser(username, password).then(({ message, status }) => {
      if (status >= 300) {
        NotificationManager.error(
          message,
          'Registration error',
          5000
        )
      } else {
        NotificationManager.success(
          message,
          'Registration success',
          5000
        )
        onClick()
      }
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(fields) => registerHandler(fields)}
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
          <FormField
            name="confirmPassword"
            inputType="password"
            labelName="Confirm Password"
            className={
              'form-control' +
              (errors.confirmPassword && touched.confirmPassword
                ? ' is-invalid'
                : '')
            }
          />
          <div className={styles.auth__formBtnsWrapper}>
            <div className={styles.auth__formBtns}>
              <Button
                wrapperClass={`${styles.auth__formBtnWrapper} ${styles.register}`}
                btnClass={`${styles.auth__formBtn}`}
                text="Register"
                btnType="submit"
                hasArrow={false}
                onClick={undefined}
                disabled={false}
              />

              <Button
                wrapperClass={`${styles.auth__formBtnWrapper} ${styles.signin}`}
                btnClass={styles.auth__formBtn}
                text="Sign In"
                btnType="button"
                hasArrow={true}
                onClick={onClick}
                disabled={false}
              />
            </div>
            <button type="reset">Reset Fields</button>
            {/*{loading && <Loader />}*/}
          </div>
        </Form>
      )}
    />
  )
}

export default RegisterForm
