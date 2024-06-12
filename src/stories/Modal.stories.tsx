import { StoryObj, Meta } from '@storybook/react';
import Modal from '../components/Modal/Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalStory: Story = {
	args: {
		title: 'Modal',
		children: <div>Modal content</div>,
	}
};
