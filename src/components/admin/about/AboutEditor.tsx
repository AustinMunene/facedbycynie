import React, { useState } from 'react';

interface AboutContent {
  title: string;
  content: string;
}

const initialContent: AboutContent = {
  title: 'About Me',
  content: `Everything has its beauty, but not everyone sees it (Andy Warhol).
  As a certified makeup Artist I have had the privilege of seeing over 50 smiles over the past one year and as stated very well by Andy I take pride in enhancing and bringing out the beauty in different kinds of people that need it for different events. This includes Television shows, Bridal, birthdays, Corporate shots and special events and I now have an extensive portfolio comprising everything beauty.
  
My approach combines technical expertise with an artistic eye, ensuring each client receives a personalized experience that brings out their best features.`,
};

export function AboutEditor() {
  const [content, setContent] = useState<AboutContent>(initialContent);

  const handleSave = () => {
    // In a real app, this would save to a backend
    console.log('Saving about content:', content);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Edit About Section</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={content.title}
            onChange={(e) => setContent({ ...content, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            value={content.content}
            onChange={(e) =>
              setContent({ ...content, content: e.target.value })
            }
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
