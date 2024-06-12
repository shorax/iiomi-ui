import { StoryObj, Meta } from '@storybook/react';
import Card from '../components/Card/Card';

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CardCollapsibleStory: Story = {
	args: {
		header: 'My Collapsible Card',
		collapsible: true,
		isOpen: true,
		children: 'this is the content of the card',
	}
};

export const CardNotCollapsibleStory: Story = {
	args: {
		header: 'My Card',
		collapsible: false,
		children: 'this is the content of the card',
	}
};