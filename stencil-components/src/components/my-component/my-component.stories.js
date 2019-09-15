import { storiesOf } from '@storybook/html';

import readme from './readme.md';

storiesOf('My Component', module).add(
  'Default',
  () => `<my-component first="Cas" middle="de" last="Rooij"></my-component>`,
  {
    notes: {
      markdown: readme,
    },
  },
);
