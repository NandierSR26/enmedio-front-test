import { CharactersList, Header } from '../../components'
import { useContainer } from './container'
import { useEffect } from 'react'

export const CharactersPage = () => {

  const {
    state: { characters },
    dispatchFn: { getCharacters, deleteCharacter }
  } = useContainer()

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <>
      <Header />

      <div className={'header-border'}></div>

      <CharactersList characters={characters} deleteCharacter={deleteCharacter} />
    </>
  )
}
