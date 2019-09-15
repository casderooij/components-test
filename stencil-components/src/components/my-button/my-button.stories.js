import { storiesOf } from '@storybook/html';
import { withActions } from '@storybook/addon-actions';

storiesOf('My Button', module)
  .addDecorator(withActions('buttonClicked'))
  .add('Default', () => `<my-button></my-button>`);
