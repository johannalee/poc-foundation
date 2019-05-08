import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from './button.component';

storiesOf('Button', module).add('with text', () => ({
  component: ButtonComponent,
  props: {
    placeholder: 'Hello Button',
    classname: 'red'
  }
}));
