import {
  initialValuesLogin,
  validationSchemaLogin,
} from '../../front-end/variables/form'
import LoginForm from '../../front-end/components/form/LoginForm'
import styles from '../../front-end/styles/modules/auth.module.scss'

const Login = () => {
  return (
    <section className={styles.auth__wrapper}>
      <div className={styles.auth__holder} />
      <div className={styles.auth__form}>
        <h1 className={styles.auth__formHeader}>
          Login
        </h1>
        <LoginForm
          initialValues={initialValuesLogin}
          validationSchema={validationSchemaLogin}
        />
      </div>
    </section>
  )
}

export default Login
