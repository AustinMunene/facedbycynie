import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../components/blog/BlogPost';
import { blogPosts } from '../data/blog';
import { BookOpen, Sparkles } from 'lucide-react';

export function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 text-pink-600 mr-4" />
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-neutral-900">
              Beauty
              <span className="block gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Discover the latest makeup trends, expert tips, and beauty tutorials from Faced by Cynie. 
              Your go-to source for all things beauty and transformation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
