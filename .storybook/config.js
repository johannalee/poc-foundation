import { configure, addDecorator } from '@storybook/angular';
import requireContext from 'require-context.macro';

import { withTests } from '@storybook/addon-jest';

import results from '../test-results.json';

import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.ts
const req = requireContext('../lib/', true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withNotes);
addDecorator(withTests({ results, filesExt: '((\\.component))((\\.specs?)|(\\.tests?))?(\\.js)?$' }));
addDecorator(withKnobs)
addDecorator(withA11y)

configure(loadStories, module);
