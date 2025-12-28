interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const formatContent = (content: string) => {
    const paragraphs = content.split('\n').filter(p => p.trim());
    
    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      
      // Check if it's a heading (starts with number or is short and ends with colon)
      const isHeading = /^\d+\./.test(trimmed) || 
                       (trimmed.length < 100 && trimmed.endsWith(':'));
      
      // Check if it's a bullet point (starts with dash, bullet, or asterisk)
      const isBullet = /^[-•*]\s/.test(trimmed) || /^[•▪▫◦]\s/.test(trimmed);
      
      if (isHeading) {
        return (
          <h3 key={index} className="text-3xl font-script font-semibold text-neutral-900 mt-10 mb-5 first:mt-0 tracking-wide">
            {trimmed.replace(/^\d+\.\s*/, '')}
          </h3>
        );
      }
      
      if (isBullet) {
        const bulletText = trimmed.replace(/^[-•*▪▫◦]\s*/, '');
        return (
          <div key={index} className="flex items-start mb-4 pl-6 relative">
            <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex-shrink-0"></div>
            <p className="font-readable-script text-lg leading-relaxed text-neutral-700 ml-2">
              {bulletText}
            </p>
          </div>
        );
      }
      
      // Check if paragraph contains "Pro Tip" or similar
      const isProTip = /pro tip|bonus tip|tip:/i.test(trimmed);
      
      if (isProTip) {
        return (
          <div key={index} className="my-6 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border-l-4 border-pink-400">
            <p className="font-readable-script text-lg leading-relaxed text-neutral-800">
              <span className="font-semibold text-pink-600">💡 {trimmed}</span>
            </p>
          </div>
        );
      }
      
      return (
        <p key={index} className="mb-5 leading-relaxed text-neutral-700 font-readable-script text-lg">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-neutral-700 leading-relaxed">
        {formatContent(content)}
      </div>
    </div>
  );
}