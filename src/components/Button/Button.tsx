import styles from './Button.module.scss'

type ButtonProps = {
  text: string
  onClick: () => void,
  isLoading?: boolean,
  className?: string,
  isSmall?: boolean
}

export const Button = ({ text, onClick, isLoading, className, isSmall }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className} ${isSmall && styles.small}`} onClick={onClick}>
      {!isLoading && text}
      {isLoading && <div className={styles.loading}></div>}
    </button>
  )
}

