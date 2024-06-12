import styles from './LoginPage.module.css'

export const LoginPage = () => {
  return (
    <main className={styles['main-container']}>

      <form className={styles['login-form']}>
        <h1>Iniciar sesión</h1>

        <div>
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            name="usuario"
          />
        </div>

        <div>
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="text"
            name="contraseña"
          />
        </div>

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
