import runStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

runStoryshots({
  config: ({ configure }) => {
    configure(() => {
      require('./button.stories');
    }, module);
  },
  suite: 'ButtonComponent > DOM Snapshot'
});

runStoryshots({
  config: ({ configure }) => {
    configure(() => {
      require('./button.stories');
    }, module);
  },
  suite: 'ButtonComponent > Image Snapshot',
  test: imageSnapshot({ storybookUrl: 'http://localhost:6006/?path=/story/button--with-text' })
});
