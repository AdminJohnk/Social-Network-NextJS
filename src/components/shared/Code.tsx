import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock = ({ ...props }: { className?: string; children?: any }) => {
  return (
    <SyntaxHighlighter
      language={props.className?.replace(/(?:lang(?:uage)?-)/, '')}
      style={materialOceanic}
      wrapLines={true}
      className='not-prose rounded-md'>
      {props.children}
    </SyntaxHighlighter>
  );
};

export const Pre = ({ ...props }: { children?: React.ReactNode }) => {
  return <div className='not-prose'>{props.children}</div>;
};
