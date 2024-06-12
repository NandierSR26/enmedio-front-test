import { Link } from 'react-router-dom'
import styles from './CharactersPage.module.css'

export const CharactersPage = () => {
  return (
    <>
      <header className={styles.header}>
        <figure className={styles.logo}>
          <img src="/assets/naruto-logo.png" alt="" />
        </figure>

        <Link to={'/favorites'} className={styles.favorites}>Favoritos</Link>
      </header>

      <div className={styles['header-border']}></div>
    </>
  )
}
