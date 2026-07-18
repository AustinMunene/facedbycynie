import { motion } from 'framer-motion';
import { BlogPost } from '../components/blog/BlogPost';
import { blogPosts } from '../data/blog';

export function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blush-50 pt-28 lg:pt-36 pb-16">
        <div className="container mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="hce-eyebrow mb-4">Journal</p>
            <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.02] mb-5 text-warmgray-900">
              Beauty <span className="italic text-blush-600">Blog</span>
            </h1>
            <p className="text-warmgray-500 text-[14px] leading-[1.8] max-w-xl mx-auto">
              Discover the latest makeup trends, expert tips, and beauty
              tutorials from Faced by Cynie — your go-to source for all things
              beauty and transformation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-16 lg:py-20 bg-cream-50">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BlogPost post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
