import { connect } from 'react-redux';
import { Form, Formik } from 'formik'
import Button from './Button'
import FormField from './Field'
import Loader from '../loader'
import { checkUser } from '../../redux/actions/login'
import styles from '../../styles/modules/auth.module.scss'

const SignInForm = ({ initialValues, validationSchema, onClick, dispatch, response }) => {
  const isLoading = false
  const loginHandler = ({ username, password }) => {
    const data = {username, password}

    dispatch(checkUser(data))
  }

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
            </div>
            <button type="reset">
              Reset Fields
            </button>
          </div>
          {isLoading && <Loader />}
        </Form>
      )}
    />
  )
}

const mapStateToProps = response => ({...response})

export default connect(mapStateToProps)(SignInForm);
