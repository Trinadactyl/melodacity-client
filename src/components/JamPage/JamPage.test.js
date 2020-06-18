import React from 'react';
import ReactDom from 'react-dom';
import JamPage from './JamPage';

test('it renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<JamPage />, div)
  ReactDom.unmountComponentAtNode(div)
})