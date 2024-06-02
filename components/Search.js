import { useState } from 'react';
import styles from './Search.module.css';

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}
