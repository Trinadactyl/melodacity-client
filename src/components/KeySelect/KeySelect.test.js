import React from 'react';
import ReactDom from 'react-dom'
import KeySelect from './KeySelect';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<KeySelect />, div)
  ReactDom.unmountComponentAtNode(div)
});