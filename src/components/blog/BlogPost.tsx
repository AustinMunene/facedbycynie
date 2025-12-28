import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost as BlogPostType } from '../../types/blog';
import { SocialLinks } from '../shared/SocialLinks';
import { BlogHeader } from './BlogHeader';
import { BlogContent } from './BlogContent';
import { PostMetadata } from './PostMetadata';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  post: BlogPostType;
  isFullPost?: boolean;
}

export function BlogPost({ post, isFullPost = false }: BlogPostProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isFullPost) {
      navigate(`/blog/post/${post.id}`);
    }
  };

  if (isFullPost) {
    return (
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/8] max-h-[450px] overflow-hidden rounded-t-2xl">
            <SafeImage
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <BlogHeader
              title={post.title}
              author={post.author}
              date={post.date}
              category={post.category}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-12">
          <BlogContent content={post.content || post.excerpt} />
        </div>

        <div className="border-t bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <SafeImage
                  src="https://i.imgur.com/cpkXDat.jpeg"
                  alt="Author"
                  className="w-16 h-16 rounded-full object-cover border-2 border-pink-200"
                />
                <div>
                  <p className="font-script text-xl font-semibold text-neutral-900">{post.author}</p>
                  <p className="text-sm text-neutral-600">Makeup Artist</p>
                </div>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <motion.article
      onClick={handleClick}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden cursor-pointer h-full flex flex-col transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center text-white font-script text-lg">
            <span>Read More</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-serif font-semibold mb-3 text-neutral-900 group-hover:text-purple-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <PostMetadata
          author={post.author}
          date={post.date}
          category={post.category}
        />
        <p className="text-gray-600 mb-4 mt-3 line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="text-purple-600 font-script font-medium text-lg tracking-wide hover:text-purple-700 transition-colors flex items-center gap-2"
          >
            Read More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <SocialLinks />
        </div>
      </div>
    </motion.article>
  );
}
