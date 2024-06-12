import styles from './Input.module.css'

interface InputProps {
  label: string;
  name: string;
  type: string;
  errors?: string;
}

export const Input = ({ label, name, type, errors }: InputProps) => {
  return (
    <div className={styles['input-container']}>
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        name={name}
      />

      { errors && <span>{errors}</span> }
    </div>
  )
}
