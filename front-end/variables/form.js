import * as Yup from 'yup'

const initialValuesLogin = {
  username: '',
  password: '',
}

const initialValuesRegister = {
  username: '',
  password: '',
  confirmPassword: '',
}

const validationSchemaLogin = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
})

const validationSchemaRegister = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

export {
  initialValuesLogin,
  initialValuesRegister,
  validationSchemaLogin,
  validationSchemaRegister,
}
