import React from 'react';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden">
      <div className="absolute top-0 left-0 px-4 py-2 bg-gray-800 text-gray-400 text-sm rounded-br">
        {language}
      </div>
      <pre className="p-6 pt-12 overflow-x-auto">
        <code className="text-gray-100 text-sm font-mono">
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;