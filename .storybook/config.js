import { configure, addDecorator } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

const req = require.context('../lib/', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withNotes);

configure(loadStories, module);
