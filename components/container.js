import styles from 'styles/container.module.css'

function Container ({ children, large = false }) {
  return (
    <div className={large ? styles.large : styles.default}>
      {children}
    </div>
  )
}
export default Container
