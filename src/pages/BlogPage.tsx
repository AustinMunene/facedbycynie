import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../components/blog/BlogPost';
import { blogPosts } from '../data/blog';

export function BlogPage() {
  return (
    <div className="pt-20">
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover the latest makeup trends, tips, and tutorials from Faced by
            Cynie.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogPost post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
