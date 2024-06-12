import { useNavigate } from 'react-router-dom';
import { Character, ICharacterstate } from '../../../interfaces/character.interface'
import styles from './Card.module.css'
import Swal from 'sweetalert2';

interface CharacterCardProps {
  character: ICharacterstate;
  deleteCharacter: (id: number) => void
}

export const CharacterCard = ({ character, deleteCharacter }: CharacterCardProps) => {

  const navigate = useNavigate()

  const handleDeleteCharacter = (id: number) => {
    Swal.fire({
      title: "Esta seguro(a)?",
      text: "Esta acción no de puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCharacter(id)
        Swal.fire({
          title: "Eliminado!",
          text: "Personaje eliminado correctamente.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className={styles['character-card']}>
      <figure className={styles['card-image']}>
        <img src={character.images[0]} alt="character-image" />
      </figure>

      <div className={styles['card-content']}>
        <h4>{ character.name }</h4>

        <div className={styles.actions}>
          <button onClick={() => navigate(`/character/${character.id}`)} >Editar</button>
          <button onClick={() => handleDeleteCharacter(character.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  )
}
