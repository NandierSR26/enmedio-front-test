import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src="/assets/naruto-logo.png" alt="" />
      </figure>

    </header>
  )
}
