// app/page.js
import BlogList from '../components/BlogList';
import { getSortedPostsData } from '../lib/posts';

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <h1 className="page-title">Welcome to My Modern Blog</h1>
      <p className="intro-text">Explore the latest articles on various topics.</p>
      <BlogList posts={allPostsData} />
    </div>
  );
}



