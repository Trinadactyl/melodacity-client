import React from 'react';
import ReactDom from 'react-dom'
import Header from './Header';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Header />, div)
  ReactDom.unmountComponentAtNode(div)
});

