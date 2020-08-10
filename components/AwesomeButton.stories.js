import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'AwesomeButton',
  decorators: [withKnobs]
}

export const MyAwesomeButton = () => ({
  template: '<AwesomeButton :label="label" :color="color" />',
  props: {
    label: {
      default: text('Label', 'Awesome button')
    },
    color: {
      default: text('Color Me', '777777')
    }
  }
})
