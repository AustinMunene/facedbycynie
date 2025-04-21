import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit } from 'lucide-react';

export function HomepageManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Homepage Content</h2>
        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          <Plus size={20} />
          Add New Section
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Hero Section</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Background Image
              </label>
              <div className="mt-1 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"
                  alt="Hero background"
                  className="w-32 h-32 object-cover rounded"
                />
                <button className="text-purple-600 hover:text-purple-700">
                  Change Image
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Heading Text
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                defaultValue="Makeup Artist"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Featured Work</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative group">
                <img
                  src={`https://images.unsplash.com/photo-${item}`}
                  alt={`Featured work ${item}`}
                  className="w-full h-32 object-cover rounded"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white rounded-full text-gray-600 hover:text-purple-600">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 bg-white rounded-full text-gray-600 hover:text-red-600">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}