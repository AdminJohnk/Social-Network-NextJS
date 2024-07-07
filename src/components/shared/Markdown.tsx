import { CodeBlock, Pre } from './Code';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeExternalLinks from 'rehype-external-links';

export interface IMarkdownProps {
  children: string | null | undefined;
}

export default function Markdown({ children }: IMarkdownProps) {
  const options = { code: CodeBlock, pre: Pre };

  return (
    <ReactMarkdown
      className='prose prose-invert min-w-full'
      components={options}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize, [rehypeExternalLinks, { content: { type: 'text', value: '🔗' } }]]}>
      {children}
    </ReactMarkdown>
  );
}
