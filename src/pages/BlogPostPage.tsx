import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BlogPost } from '../components/blog/BlogPost';
import { blogPosts } from '../data/blog';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <BlogPost post={post} isFullPost />
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map(relatedPost => (
                <BlogPost key={relatedPost.id} post={relatedPost} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}