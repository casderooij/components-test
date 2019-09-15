import { storiesOf } from '@storybook/html';

storiesOf('My Component', module).add(
  'Default',
  () => `<my-component first="Cas" middle="de" last="Rooij"></my-component>`,
);
