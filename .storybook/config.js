import { configure, addDecorator } from '@storybook/angular';
import requireContext from 'require-context.macro';

import { withTests } from '@storybook/addon-jest';

import results from '../test-results.json';

// automatically import all files ending in *.stories.ts
const req = requireContext('../lib/', true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withNotes);
addDecorator(withTests({ results, filesExt: '((\\.component))((\\.specs?)|(\\.tests?))?(\\.js)?$' }));

configure(loadStories, module);
