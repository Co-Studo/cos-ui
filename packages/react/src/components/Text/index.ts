import TextRoot from './Text';
import TextHighlight from './TextHighlight';

const Text = Object.assign(TextRoot, {
  Highlight: TextHighlight,
});

export { Text };
export * from './Text.types';
