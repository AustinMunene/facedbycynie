import React from 'react';

interface TabButtonProps {
  tab: string;
  activeTab: string;
  onClick: () => void;
}

export function TabButton({ tab, activeTab, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg capitalize ${
        activeTab === tab
          ? 'bg-purple-600 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {tab} Manager
    </button>
  );
}