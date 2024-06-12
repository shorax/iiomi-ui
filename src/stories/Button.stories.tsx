import { StoryObj, Meta } from '@storybook/react';
import Button from '../components/Button/Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonPrimaryStory: Story = {
	args: {
		id: 'button',
		variant: 'primary',
		title: 'Button',
		children: 'Primary Button',
		size: 'medium',
		disabled: false,
	}
};
