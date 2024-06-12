import { Character } from '../../../interfaces/character.interface'
import { CharacterCard } from '../CharacterCard'
import styles from './CharactersList.module.css'

interface CharacterListProps {
  characters: Character[];
}

export const CharactersList = ({ characters }: CharacterListProps) => {
  console.log(characters)
  return (
    <main className={styles['main-content']}>
      {
        characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))
      }
    </main>
  )
}
