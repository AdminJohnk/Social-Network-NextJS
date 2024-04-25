import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import React from 'react';

interface CodeBlockComponentProps {
  node: {
    attrs: {
      language: string;
    };
  };
  updateAttributes: (attrs: { language: string }) => void;
  extension: {
    options: {
      lowlight: {
        listLanguages: () => string[];
      };
    };
  };
}

export default ({
  node: {
    attrs: { language: defaultLanguage }
  },
  updateAttributes,
  extension
}: CodeBlockComponentProps) => (
  <NodeViewWrapper className='code-block relative'>
    <select
      className='absolute right-2 top-2'
      contentEditable={false}
      defaultValue={defaultLanguage}
      onChange={event => updateAttributes({ language: event.target.value })}
    >
      <option value='null'>auto</option>
      <option disabled>—</option>
      {extension.options.lowlight.listLanguages().map((lang, index) => (
        <option key={index} value={lang}>
          {lang}
        </option>
      ))}
    </select>
    <pre>
      <NodeViewContent as='code' />
    </pre>
  </NodeViewWrapper>
);
