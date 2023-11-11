import React from 'react';
import { Button } from '../components';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = () => <Button label="Click me" onClick={() => alert('Button clicked')} />;
