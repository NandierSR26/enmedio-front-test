import styles from './CharactersPage.module.css'
import { CharactersList, Header } from '../../components'
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
      <Header />

      <div className={styles['header-border']}></div>

      <CharactersList characters={characters} />
    </>
  )
}
