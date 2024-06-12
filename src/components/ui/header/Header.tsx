import { useAppDispatch } from '../../../hooks/useReduxFunctions'
import { startLogout } from '../../../store/auth/thunks';
import styles from './Header.module.css'

export const Header = () => {

  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src="/assets/naruto-logo.png" alt="" />
      </figure>

      <button
        className={styles.logout}
        onClick={() => dispatch( startLogout() )}
      >
        Cerrar Sesión
      </button>
    </header>
  )
}
