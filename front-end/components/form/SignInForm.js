import { connect } from 'react-redux';
import { Form, Formik } from 'formik'
import { NotificationManager } from 'react-notifications'
import { useRouter } from 'next/router'
import Button from './Button'
import FormField from './Field'
import Loader from '../loader'
import { checkUser } from '../../redux/actions/index'
import styles from '../../styles/modules/auth.module.scss'

const SignInForm = ({ initialValues, validationSchema, onClick, dispatch }) => {
  const router = useRouter()
  const isLoading = false
  const loginHandler = ({ username, password }) => {
    const data = {username, password}

    dispatch(checkUser(data))
  }
  const clearHandler = () => {}

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
}


const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(SignInForm);
