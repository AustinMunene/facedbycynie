import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit } from 'lucide-react';
import { portfolioItems } from '../../data/portfolio';

export function PortfolioManager() {
  const [items, setItems] = useState(portfolioItems);

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Portfolio Items</h2>
        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          <Plus size={20} />
          Add New Item
        </button>
      </div>

      <div className="grid gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <span className="text-sm text-purple-600">{item.category}</span>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <Edit size={20} />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 text-gray-600 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}