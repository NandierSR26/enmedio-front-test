import { ICharacterstate } from '../../../interfaces/character.interface'
import { CharacterCard } from '../CharacterCard'
import styles from './CharactersList.module.css'

interface CharacterListProps {
  characters: ICharacterstate[];
  deleteCharacter: (id: number) => void;
}

export const CharactersList = ({ characters, deleteCharacter }: CharacterListProps) => {
  console.log(characters)
  return (
    <main className={styles['main-content']}>
      {
        characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            deleteCharacter={deleteCharacter}
          />
        ))
      }
    </main>
  )
}
