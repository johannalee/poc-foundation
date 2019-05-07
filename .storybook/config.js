import { configure } from '@storybook/angular';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.ts
const req = requireContext('../lib/', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
