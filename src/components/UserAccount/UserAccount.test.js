import React from 'react';
import ReactDom from 'react-dom'
import UserAccount from './UserAccount';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<UserAccount />, div)
  ReactDom.unmountComponentAtNode(div)
});
