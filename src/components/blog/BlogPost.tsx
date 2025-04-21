import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost as BlogPostType } from '../../types/blog';
import { SocialLinks } from '../shared/SocialLinks';
import { BlogHeader } from './BlogHeader';
import { BlogContent } from './BlogContent';
import { PostMetadata } from './PostMetadata';

interface BlogPostProps {
  post: BlogPostType;
  isFullPost?: boolean;
}

export function BlogPost({ post, isFullPost = false }: BlogPostProps) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/post/${post.id}`);
  };

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div
        className={`relative ${isFullPost ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto object-contain bg-gray-100"
          loading="lazy"
        />
        {isFullPost && (
          <BlogHeader
            title={post.title}
            author={post.author}
            date={post.date}
            category={post.category}
          />
        )}
      </div>

      <div className={`p-8 ${isFullPost ? 'max-w-4xl mx-auto' : ''}`}>
        {!isFullPost && (
          <>
            <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
            <PostMetadata
              author={post.author}
              date={post.date}
              category={post.category}
            />
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={handleReadMore}
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                Read More
              </button>
              <SocialLinks />
            </div>
          </>
        )}

        {isFullPost && <BlogContent content={post.content || post.excerpt} />}
      </div>

      {isFullPost && (
        <div className="border-t bg-gray-50">
          <div className="max-w-4xl mx-auto px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/Cynie.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ3luaWUuanBnIiwiaWF0IjoxNzM1OTkyOTcwLCJleHAiOjE4OTM2NzI5NzB9.ZiOdf_8X720p9L1StHLzaCTUSTOPXyHgm-ZigzmE--Q"
                  alt="Author"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-gray-500">Makeup Artist</p>
                </div>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
