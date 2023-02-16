import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/footer.module.css'

function Footer () {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [social]
        </div>
      </Container>
    </footer>
  )
}
export default Footer
