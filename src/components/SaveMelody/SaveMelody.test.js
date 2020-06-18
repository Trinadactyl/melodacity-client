import React from 'react';
import ReactDom from 'react-dom'
import SaveMelody from './SaveMelody';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<SaveMelody />, div)
  ReactDom.unmountComponentAtNode(div)
});
