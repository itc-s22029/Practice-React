import Link from 'next/link'
import styles from 'styles/nav.module.css'

function Nav () {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href='/' legacyBehavior>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' legacyBehavior>
            About
          </Link>
        </li>
        <li>
          <Link href='/blog' legacyBehavior>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
