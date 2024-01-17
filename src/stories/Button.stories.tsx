import React from 'react';
import { Button } from '../components';
import { ThemeContextProvider } from '../contexts';
import storageHelpers from '../helpers/storageHelpers';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = () => {
  storageHelpers.localStorage.setItem('theme', 'light');
  return ( <Button id={'FOO'} label="Click me" onClick={() => alert('Button clicked')} />)};
export const DarkModeButton = () => {
  storageHelpers.localStorage.setItem('theme', 'dark');
  return (
    <ThemeContextProvider>
      <Button id={'FOO'} label="Click me" onClick={() => alert('Button clicked')} />
    </ThemeContextProvider>
  )
};

