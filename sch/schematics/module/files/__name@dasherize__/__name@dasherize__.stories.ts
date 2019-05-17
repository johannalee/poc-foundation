import { storiesOf } from '@storybook/angular';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

storiesOf('<%= classify(name) %>Component', module)
  .add('a default story', () => ({
    component: <%= classify(name) %>Component,
    props: {},
  }));
