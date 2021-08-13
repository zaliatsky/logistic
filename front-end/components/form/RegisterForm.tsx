import { Form, Formik } from 'formik'
import FormField from './Field'
import styles from '../../styles/helpers/auth.module.scss'
import Button from './Button'
import { useHttp } from '../../hooks/http.hook'
import env from '../../variables/env'

const RegisterForm = ({ initialValues, validationSchema, onClick }) => {
  const { loading, request } = useHttp()

  const registerHandler = async ({ username, password }) => {
    try {
      const data = await request(`${env.apiUrl}/api/auth/register`, 'POST', {
        username,
        password,
      }).then((data2) => console.log('here is response data', data2))
      console.log('data is', data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(fields) => registerHandler(fields)}
      render={({ errors, touched }) => (
        <Form>
          <FormField
            name={'username'}
            inputType={'text'}
            labelName={'Username'}
            className={
              'form-control' +
              (errors.username && touched.username ? ' is-invalid' : '')
            }
          />
          <FormField
            name={'password'}
            inputType={'password'}
            labelName={'Password'}
            className={
              'form-control' +
              (errors.password && touched.password ? ' is-invalid' : '')
            }
          />
          <FormField
            name={'confirmPassword'}
            inputType={'password'}
            labelName={'Confirm Password'}
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
                text={'Register'}
                btnType={'submit'}
                hasArrow={false}
                onClick={null}
                disabled={loading}
              />

              <Button
                wrapperClass={`${styles.auth__formBtnWrapper} ${styles.signin}`}
                btnClass={styles.auth__formBtn}
                text={'Sign In'}
                btnType={'button'}
                hasArrow={true}
                onClick={onClick}
                disabled={null}
              />
            </div>
            <button type="reset">Reset Fields</button>
          </div>
        </Form>
      )}
    />
  )
}

export default RegisterForm
