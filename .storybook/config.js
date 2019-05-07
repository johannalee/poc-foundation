import { configure, addDecorator } from '@storybook/angular';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.ts
const req = requireContext('../lib/', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withNotes);

configure(loadStories, module);
