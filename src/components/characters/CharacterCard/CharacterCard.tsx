import styles from './Card.module.css'

export const CharacterCard = () => {
  return (
    <div className={styles['character-card']}>
      <figure className={styles['card-image']}>
        <img src="/assets/naruto-characters.jpg" alt="character-image" />
      </figure>

      <div className={styles['card-content']}>
        <h4>Naruto Uzumaki</h4>

        <div className={styles.actions}>
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  )
}
