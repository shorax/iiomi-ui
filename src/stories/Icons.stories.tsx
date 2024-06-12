import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import {ArrowIcon, CloseIcon, SunIcon, MoonIcon, PlusIcon, MinusIcon, InfoIcon, CheckmarkIcon, TrashIcon, HeartIcon, LockIcon, DownloadIcon, HelpIcon} from '../components/Icons';

const meta: Meta = {
	title: 'Components/Icons',
	component: ArrowIcon,
};

const iconList = [ArrowIcon, CloseIcon, SunIcon, MoonIcon, PlusIcon, MinusIcon, InfoIcon, CheckmarkIcon, TrashIcon, HeartIcon, LockIcon, DownloadIcon, HelpIcon];

export default meta;

type Story = StoryObj;

export const AllIcons: Story = {
	render: () => (
		<div style={{display: 'flex', gap: '16px'}}>
			{iconList.map((Icon, index) => (
				<div key={index} style={{height: '32px', width: '32px'}}>
				<Icon />
				</div>
			))}
		</div>
	),
	name: 'All Icons'
};