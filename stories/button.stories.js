import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Button from 'c/button';
import { withKnobs, text, select } from '@storybook/addon-knobs';

buildAndRegisterCustomElement('c-button', Button);

const buttonFxn = () => {
    const test = text('label', 'Button Text');
    const variant = select('variant', ['brand',
        'destructive',
        'brand-outline',
        'destructive-text',
        'neutral',
        'success'])
    return `
    <div class="slds-p-around_medium">
    <c-button variant='${variant}' label='${test}'></c-button>
    </div>`
};

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('base', buttonFxn);



