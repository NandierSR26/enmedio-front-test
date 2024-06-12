import { Input } from '../../components'
import styles from './LoginPage.module.css'

export const LoginPage = () => {
  return (
    <main className={styles['main-container']}>

      <form className={styles['login-form']}>
        <h1>Iniciar sesión</h1>

        <Input label={'Usuario'} name={'usuario'} type={'text'} />
        <Input label={'Contraseña'} name={'contraseña'} type={'password'} />

        <button
          type="submit"
          className={styles['form-submit']}
        >
          Ingresar
        </button>
      </form>

    </main>
  )
}
