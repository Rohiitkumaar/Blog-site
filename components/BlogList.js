
import Link from 'next/link';
import styles from './BlogList.module.css';

export default function BlogList({ posts }) {
  return (
    <ul className={styles.list}>
      {posts.map(({ id, title, summary, author }) => (
        <li key={id} className={styles.item}>
          <Link href={`/posts/${id}`}>
            <div className={styles.link}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.summary}>{summary}</p>
              <p className={styles.author}>By {author}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
