import { StoryObj, Meta } from '@storybook/react';
import AppBar from '../components/AppBar/AppBar';


const meta: Meta<typeof AppBar> = {
	title: 'Components/AppBar',
	component: AppBar,
};

export default meta;

type Story = StoryObj<typeof AppBar>;

export const AppBarStory: Story = {
	args: {
		children: 'AppBar',
		position: 'fixed'
	}
};