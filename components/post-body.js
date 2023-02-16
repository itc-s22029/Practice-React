import styles from 'styles/post-body.module.css'

function PostBody ({ children }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}
export default PostBody
