import React from 'react';
import ReactDom from 'react-dom'
import Users from './Users';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Users />, div)
  ReactDom.unmountComponentAtNode(div)
});
