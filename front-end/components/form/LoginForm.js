import { connect } from 'react-redux'
import { Form, Formik } from 'formik'
import { NotificationContainer } from 'react-notifications'
import { useRouter } from 'next/router'
import Button from './Button'
import FormField from './Field'
import Loader from '../loader'
import { checkUser } from '../../redux/actions/login'
import styles from '../../styles/modules/auth.module.scss'

const LoginForm = ({ initialValues, validationSchema, dispatch }) => {
  const router = useRouter()
  const isLoading = false
  const loginHandler = async (data) => {
    dispatch(checkUser(data))
  }
  const registerHandler = () => router.push('/register')

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(fields) => loginHandler(fields)}
      >
        {({ errors, touched }) => (
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
                  wrapperClass={`${styles.auth__formBtnWrapper} ${styles.login}`}
                  btnClass={styles.auth__formBtn}
                  text="Login"
                  type="submit"
                  disabled={false}
                />
                <Button
                  wrapperClass={`${styles.auth__formBtnWrapper} ${styles.register}`}
                  btnClass={styles.auth__formBtn}
                  text="Register"
                  type="button"
                  hasArrow
                  onClick={registerHandler}
                  disabled={false}
                />
              </div>
              <button type="reset">Reset Fields</button>
            </div>
            {isLoading && <Loader />}
          </Form>
        )}
      </Formik>
      <NotificationContainer />
    </>
  )
}

const mapStateToProps = ({ loginReducer }) => loginReducer

export default connect(mapStateToProps)(LoginForm)
