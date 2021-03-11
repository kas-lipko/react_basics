import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite among JS engineers'
  },
  {
    title: 'How to use React?',
    content: 'To use React you will utilize components'
  }
];

export default () => {
  return <div><Accordion items={items} /></div>
};
