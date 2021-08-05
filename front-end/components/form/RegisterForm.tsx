import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import FormField from './Field'
import styles from '../../styles/auth.module.scss'
import Button from './Button'

const RegisterForm = ({ initialValues, onClick }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(4, 'Password must be at least 4 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
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
            id={'email'}
            name={'email'}
            inputType={'email'}
            labelName={'Email'}
            className={
              'form-control' +
              (errors.email && touched.email ? ' is-invalid' : '')
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
          <FormField
            id={'confirmPassword'}
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
              />

              <Button
                wrapperClass={`${styles.auth__formBtnWrapper} ${styles.signin}`}
                btnClass={styles.auth__formBtn}
                text={'Sign In'}
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

export default RegisterForm
