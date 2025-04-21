import React, { useState } from 'react';
import { BlogPost } from '../../../types/blog';
import { BlogEditor } from './BlogEditor';
import { useBlogPosts } from './useBlogPosts';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { supabase } from '../../../lib/supabase';

export function BlogManager() {
  const { posts, isLoading, error, reload } = useBlogPosts();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const handleSave = async (post: BlogPost) => {
    try {
      setSaveError(null);
      const { data, error: saveError } = await supabase
        .from('blog_posts')
        .upsert({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          image_url: post.imageUrl,
          category: post.category,
          author: post.author || 'Cynie',
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (saveError) throw saveError;
      await reload();
      setEditingPost(null);
      setIsCreating(false);
    } catch (err) {
      setSaveError('Failed to save post');
      console.error('Error saving post:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    try {
      setSaveError(null);
      const { error: deleteError } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;
      await reload();
    } catch (err) {
      setSaveError('Failed to delete post');
      console.error('Error deleting post:', err);
    }
  };

  const handleAddNew = () => {
    setEditingPost(null);
    setIsCreating(true);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  if (isCreating) {
    return <BlogEditor onSave={handleSave} />;
  }

  if (editingPost) {
    return <BlogEditor post={editingPost} onSave={handleSave} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Blog Posts</h2>
        <button
          onClick={handleAddNew}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Add New Post
        </button>
      </div>

      {saveError && <ErrorMessage message={saveError} />}

      <div className="grid gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
                <p className="text-sm text-purple-600 mt-1">{post.category}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingPost(post)}
                  className="text-purple-600 hover:text-purple-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}