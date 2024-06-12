import { useAppDispatch } from '../../../hooks/useReduxFunctions'
import { startLogout } from '../../../store/auth/thunks';
import styles from './Header.module.css'
import logo from '../../../assets/naruto-logo.png'

export const Header = () => {

  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src={logo} alt="logo" />
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
