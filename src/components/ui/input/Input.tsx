import styles from './Input.module.css'

interface InputProps {
  label: string;
  name: string;
  type: string;
  errors?: any;
  onChange?: any;
  values?: any;
  touched?: any;
}

export const Input = ({ label, name, type, errors, onChange, values, touched }: InputProps) => {
  return (
    <div className={styles['input-container']}>
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        name={name}
        onChange={onChange}
        value={values}
      />

      { (errors && touched) && <span>{errors}</span> }
    </div>
  )
}
