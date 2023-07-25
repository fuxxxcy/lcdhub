import { useEffect, useState } from 'react';
import { marked } from 'marked';
import Parser from 'html-react-parser';
import DOMPurify from 'dompurify';
import { gfmHeadingId } from "marked-gfm-heading-id";

interface MarkdownRendererProps {
  content: string | Node;
}

const MarkdownRenderer = ({content}: MarkdownRendererProps) => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [renderedContent, setRenderedContent] = useState<string | JSX.Element | JSX.Element[]>('');

  useEffect(() => {
    try {
      const validateAndSanitizeContent = (content: string | Node) => {
        const sanitizedContent = DOMPurify.sanitize(content);
        return sanitizedContent;
      };

      const validatedContent = validateAndSanitizeContent(content);
      setMarkdownContent(validatedContent);
    }
    catch(error) {
      console.error(error);
    };
  }, [content]);

  useEffect(() => {
    marked.use(gfmHeadingId());

    const parsedContent = marked.parse(markdownContent, {mangle: false});
    const renderedContent = Parser(parsedContent);

    setRenderedContent(renderedContent);
  }, [markdownContent]);

  return <>{renderedContent}</>;
};

export default MarkdownRenderer;
