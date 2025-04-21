import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { BlogEditor } from './BlogEditor';
import { PortfolioManager } from './PortfolioManager';
import { HomepageManager } from './HomepageManager';
import { blogService } from '../../services/blogService';

export function ContentManager() {
  const [activeTab, setActiveTab] = useState('blog');

  const handleSaveBlogPost = async (post: Omit<BlogPost, 'id'>) => {
    try {
      await blogService.createPost(post);
      // Show success message or redirect
    } catch (error) {
      console.error('Failed to save blog post:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
        </TabsList>

        <TabsContent value="blog">
          <BlogEditor onSave={handleSaveBlogPost} />
        </TabsContent>

        <TabsContent value="portfolio">
          <PortfolioManager />
        </TabsContent>

        <TabsContent value="homepage">
          <HomepageManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}