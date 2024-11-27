import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  onClick: () => void,
  isLoading?: boolean,
  className?: string
}

export const Button = ({ text, onClick, isLoading, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {!isLoading && text}
      {isLoading && <div className={styles.loading}></div>}
    </button>
  )
}

