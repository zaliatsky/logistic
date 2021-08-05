import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { InputGroup, FormControl } from 'react-bootstrap'
import * as Yup from 'yup'
import styles from '../../front-end/styles/auth.module.scss'

console.log('styles', styles)

const Auth = () => {
  return (
    <section className={styles.auth__wrapper}>
      <div className={styles.auth__holder} />
      <div className={styles.auth__form}>
        <h1 className={styles.auth__formHeader}>Sign Up</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('First Name is required'),
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
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
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <InputGroup>
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="name"
                    id={'name'}
                    className={
                      'form-control' +
                      (errors.name && touched.name ? ' is-invalid' : '')
                    }
                  />
                </InputGroup>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                {/*<Field*/}
                {/*  name="email"*/}
                {/*  type="text"*/}
                {/*  className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}*/}
                {/*/>*/}
                <InputGroup
                  className={
                    'form-control' +
                    (errors.name && touched.name ? ' is-invalid' : '')
                  }
                >
                  <InputGroup.Text>@</InputGroup.Text>
                  <Field
                    name="email"
                    type="text"
                    className={
                      'form-control' +
                      (errors.email && touched.email ? ' is-invalid' : '')
                    }
                  />
                </InputGroup>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    'form-control' +
                    (errors.confirmPassword && touched.confirmPassword
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn">
                  Register
                </button>
                <button type="reset" className="btn">
                  Reset
                </button>
                <FontAwesomeIcon icon={faCoffee} />
              </div>
            </Form>
          )}
        />
      </div>
    </section>
  )
}

export default Auth
