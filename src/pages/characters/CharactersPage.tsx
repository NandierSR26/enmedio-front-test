import { Link } from 'react-router-dom'
import styles from './CharactersPage.module.css'
import { CharacterCard, CharactersList } from '../../components'
import { useContainer } from './container'
import { useEffect } from 'react'

export const CharactersPage = () => {

  const {
    state: { characters },
    dispatchFn: { getCharacters }
  } = useContainer()

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <>
      <header className={styles.header}>
        <figure className={styles.logo}>
          <img src="/assets/naruto-logo.png" alt="" />
        </figure>

        <Link to={'/favorites'} className={styles.favorites}>Favoritos</Link>
      </header>

      <div className={styles['header-border']}></div>

      <CharactersList characters={characters} />
    </>
  )
}
