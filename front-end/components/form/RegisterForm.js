import { Form, Formik } from 'formik'
import {connect} from 'react-redux'
import {useRouter} from 'next/router'
import Button from './Button'
import FormField from './Field'
import Loader from '../loader'
import { registerUser } from '../../redux/actions/login'
import styles from '../../styles/modules/auth.module.scss'

const RegisterForm = ({ initialValues, validationSchema, dispatch, response }) => {
    const router = useRouter()
    const registerHandler = async ({username, password}) => {
      const data = {username, password}

      dispatch(registerUser(data))
    }
    const loginHandler = () => router.push('/')
    const isLoading = false

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(fields) => registerHandler(fields)}
      >
        {({errors, touched}) => (
          <Form>
            <FormField
              name='username'
              inputType='text'
              labelName='Username'
              className={
                'form-control' +
                (errors.username && touched.username ? ' is-invalid' : '')
              }
            />
            <FormField
              name='password'
              inputType='password'
              labelName='Password'
              className={
                'form-control' +
                (errors.password && touched.password ? ' is-invalid' : '')
              }
            />
            <FormField
              name='confirmPassword'
              inputType='password'
              labelName='Confirm Password'
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
                  wrapperClass={`${styles.auth__formBtnWrapper} ${styles.login}`}
                  btnClass={`${styles.auth__formBtn}`}
                  text='Register'
                  type='submit'
                  disabled={false}
                />
                <Button
                  wrapperClass={`${styles.auth__formBtnWrapper} ${styles.register}`}
                  btnClass={styles.auth__formBtn}
                  text='Sign In'
                  type='button'
                  hasArrow
                  onClick={loginHandler}
                  disabled={false}
                />
              </div>
              <button type='reset'>
                Reset Fields
              </button>
            </div>
            {isLoading && <Loader/>}
          </Form>
        )}
      </Formik>
    )
}

const mapStateToProps = (user) => user

export default connect(mapStateToProps)(RegisterForm)
