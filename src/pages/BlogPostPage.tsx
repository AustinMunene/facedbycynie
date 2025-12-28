import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost } from '../components/blog/BlogPost';
import { blogPosts } from '../data/blog';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <LoadingSpinner />
      </div>
    );
  }

  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="pt-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6 lg:py-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5 lg:mb-6"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-script text-lg transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Main Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BlogPost post={post} isFullPost />
        </motion.div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-16"
          >
            <div className="flex items-center gap-3 mb-6 lg:mb-10">
              <Sparkles className="w-6 h-6 text-pink-600" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-neutral-900">
                Related
                <span className="block gradient-text">Posts</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BlogPost post={relatedPost} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}