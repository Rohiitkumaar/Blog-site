
import styles from './BlogPost.module.css';

export default function BlogPost({ post }) {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <p className={styles.author}>By {post.author}</p>
    </article>
  );
}
