import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogManager } from '../../../components/admin/blog/BlogManager';
import { ServiceManager } from '../../../components/admin/services/ServiceManager';

type TabType = 'blog' | 'services';

export function AdminTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('blog');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'blog', label: 'Blog Posts' },
    { id: 'services', label: 'Services' }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'blog':
        return <BlogManager />;
      case 'services':
        return <ServiceManager />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg p-6 shadow-sm"
      >
        {getTabContent()}
      </motion.div>
    </div>
  );
}