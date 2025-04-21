import { supabase } from '../supabase';
import { BlogPost } from '../../types/blog';
import { BlogPostDTO, mapBlogPostFromDTO } from './types';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data as BlogPostDTO[]).map(mapBlogPostFromDTO);
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'date'>): Promise<BlogPost> {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([{
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image_url: post.imageUrl,
      author: post.author,
      category: post.category
    }])
    .select()
    .single();

  if (error) throw error;
  return mapBlogPostFromDTO(data as BlogPostDTO);
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>): Promise<BlogPost> {
  const { data, error } = await supabase
    .from('blog_posts')
    .update({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image_url: post.imageUrl,
      category: post.category
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return mapBlogPostFromDTO(data as BlogPostDTO);
}

export async function deleteBlogPost(id: string): Promise<void> {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
}