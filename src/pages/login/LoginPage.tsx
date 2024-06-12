import { Formik } from 'formik'
import { Input } from '../../components'
import styles from './LoginPage.module.css'
import * as Yup from 'yup'
import { useAppDispatch } from '../../hooks/useReduxFunctions'
import { startLogin } from '../../store/auth/thunks'

export const LoginPage = () => {

  const dispatch = useAppDispatch()

  return (
    <main className={styles['main-container']}>

      <Formik
        initialValues={{
          usuario: '',
          contraseña: ''
        }}
        validationSchema={Yup.object({
          usuario: Yup.string().required('Requerido'),
          contraseña: Yup.string().required('Requerido'),
        })}
        onSubmit={({usuario, contraseña}) => {
          dispatch( startLogin(usuario) )
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (

          <form className={styles['login-form']} onSubmit={handleSubmit}>
            <h1>Iniciar sesión</h1>

            <Input 
              label={'Usuario'} 
              name={'usuario'} 
              type={'text'}
              onChange={handleChange}
              values={values.usuario}
              errors={errors.usuario}
              touched={touched.usuario}
            />
            <Input 
              label={'Contraseña'} 
              name={'contraseña'} 
              type={'password'}
              onChange={handleChange}
              values={values.contraseña}
              errors={errors.contraseña}
              touched={touched.contraseña}
            />

            <button
              type="submit"
              className={styles['form-submit']}
            >
              Ingresar
            </button>
          </form>

        )}
      </Formik>

    </main>
  )
}
