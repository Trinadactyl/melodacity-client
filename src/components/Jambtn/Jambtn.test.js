import React from 'react';
import ReactDom from 'react-dom'
import Jambtn from './Jambtn';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Jambtn />, div)
  ReactDom.unmountComponentAtNode(div)
});
