import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import markdown from './README.md';

storiesOf('Button', module)
  .addParameters({
    jest: ['button']
  })
  .add(
    'with text',
    () => ({
      component: ButtonComponent,
      props: {
        placeholder: 'Hello Button',
        classname: 'red'
      }
    }),
    { notes: { markdown } }
  );
