import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import * as readme from './README.md';

storiesOf('Button', module).add(
  'with text',
  () => ({
    component: ButtonComponent,
    props: {
      placeholder: 'Hello Button',
      classname: 'green'
    }
  }),
  { notes: { markdown: readme } }
);
