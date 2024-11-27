import styles from './Nav.module.scss'

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <img
        className={styles.logo}
        src="https://cdn.prod.website-files.com/607ef7a9757a0319beb2dae2/609bb4724f5dee5ea5de2f0d_InfoSum_Logo-LIGHT.svg"
        alt="infosum logo"
      />
    </div>
  )
}