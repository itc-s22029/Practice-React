import styles from 'styles/pokehero.module.css'

function PokeHero ({ title }) {
  return (
    <div>
      <h1 className={styles.title}>
        {title}
      </h1>
    </div>
  )
}
export default PokeHero
