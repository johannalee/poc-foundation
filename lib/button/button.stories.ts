import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import markdown from './README.md';

const props =
  process.env.NODE_ENV === 'test'
    ? {
        placeholder: 'Hello Button',
        classname: 'red'
      }
    : {
        placeholder: text('placeholder', 'Hello Button'),
        classname: select(
          'classname',
          {
            Red: 'red',
            Green: 'green',
            Blue: 'blue'
          },
          'red'
        )
      };

storiesOf('Button', module)
  .addParameters({
    jest: ['button']
  })
  .add(
    'with text',
    () => ({
      component: ButtonComponent,
      props
    }),
    { notes: { markdown } }
  );
