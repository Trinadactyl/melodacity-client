import React from 'react';
import ReactDom from 'react-dom'
import ProgSelect from './ProgSelect';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<ProgSelect />, div)
  ReactDom.unmountComponentAtNode(div)
});
