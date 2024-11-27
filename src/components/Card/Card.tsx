import styles from './Card.module.scss'

interface CardProps {
  keyName: string,
  content: string,
  isDarkTheme?: boolean
}

export const Card = ({ keyName, content, isDarkTheme }: CardProps) => {
  return (
    <div className={`${styles.card} ${isDarkTheme ? styles.cardDark : ''}`} key={keyName}>
      <span className={styles.title}>{keyName}</span>
      <span className={`${styles.content} ${!content && styles.isEmpty}`}>{
        (content?.length > 16 ? `${content?.slice(0, 15)}...` : content) || "-- empty --"
      }</span>
    </div>
  )
}

