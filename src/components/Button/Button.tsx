import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  onClick: () => void,
  isLoading?: boolean
}

export const Button = ({ text, onClick, isLoading }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {!isLoading && text}
      {isLoading && <div className={styles.loading}></div>}
    </button>
  )
}

