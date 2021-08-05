import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import FormField from './Field'
import styles from '../../styles/auth.module.scss'
import Button from './Button'

const SignInForm = ({ initialValues, onClick }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string()
          .min(4, 'Password must be at least 4 characters')
          .required('Password is required'),
      })}
      onSubmit={(fields) => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
      }}
      render={({ errors, touched }) => (
        <Form>
          <FormField
            id={'username'}
            name={'username'}
            inputType={'text'}
            labelName={'Username'}
            className={
              'form-control' +
              (errors.username && touched.username ? ' is-invalid' : '')
            }
          />
          <FormField
            id={'password'}
            name={'password'}
            inputType={'password'}
            labelName={'Password'}
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
                text={'Sign In'}
                btnType={'submit'}
                hasArrow={false}
                onClick={null}
              />

              <Button
                wrapperClass={`${styles.auth__formBtnWrapper} ${styles.register}`}
                btnClass={`${styles.auth__formBtn}`}
                text={'Register'}
                btnType={'button'}
                hasArrow={true}
                onClick={onClick}
              />
            </div>
            <button type="reset">Reset</button>
          </div>
        </Form>
      )}
    />
  )
}

export default SignInForm
