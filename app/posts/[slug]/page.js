
import Link from 'next/link';
import BlogPost from '../../../components/BlogPost';
import { getAllPostIds, getPostData } from '../../../lib/posts';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);

  return (
    <div>
      <BlogPost post={postData} />
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
    </div>
  );
}
