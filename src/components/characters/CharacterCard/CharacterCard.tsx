import { useNavigate } from 'react-router-dom';
import { Character, ICharacterstate } from '../../../interfaces/character.interface'
import styles from './Card.module.css'

interface CharacterCardProps {
  character: ICharacterstate;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {

  const navigate = useNavigate()

  return (
    <div className={styles['character-card']}>
      <figure className={styles['card-image']}>
        <img src={character.images[0]} alt="character-image" />
      </figure>

      <div className={styles['card-content']}>
        <h4>{ character.name }</h4>

        <div className={styles.actions}>
          <button onClick={() => navigate(`/character/${character.id}`)} >Editar</button>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  )
}
