import React from 'react';

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-6 leading-relaxed text-gray-700 font-['Open_Sans']">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="prose max-w-none mt-8 font-['Open_Sans']">
      {formatContent(content)}
    </div>
  );
}