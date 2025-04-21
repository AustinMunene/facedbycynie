import { createClient } from '@supabase/supabase-js';
import { BlogPost } from '../../types/blog';
import { PortfolioItem } from '../../types/portfolio';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const adminApi = {
  // Blog Management
  async createBlogPost(post: Omit<BlogPost, 'id' | 'date'>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([{
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        image_url: post.imageUrl,
        author: post.author,
        category: post.category,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateBlogPost(id: string, post: Partial<BlogPost>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        image_url: post.imageUrl,
        category: post.category,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteBlogPost(id: string) {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Portfolio Management
  async createPortfolioItem(item: Omit<PortfolioItem, 'id'>) {
    const { data, error } = await supabase
      .from('portfolio')
      .insert([{
        title: item.title,
        description: item.description,
        category: item.category,
        image_url: item.imageUrl,
        before_image: item.beforeImage,
        products: item.products,
        testimonial: item.testimonial
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updatePortfolioItem(id: string, item: Partial<PortfolioItem>) {
    const { data, error } = await supabase
      .from('portfolio')
      .update({
        title: item.title,
        description: item.description,
        category: item.category,
        image_url: item.imageUrl,
        before_image: item.beforeImage,
        products: item.products,
        testimonial: item.testimonial,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deletePortfolioItem(id: string) {
    const { error } = await supabase
      .from('portfolio')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Image Upload
  async uploadImage(file: File, path: string): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  },

  async deleteImage(url: string) {
    const path = url.split('/').pop();
    if (!path) return;

    const { error } = await supabase.storage
      .from('images')
      .remove([path]);

    if (error) throw error;
  }
};