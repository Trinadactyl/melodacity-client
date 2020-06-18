import React from 'react';
import ReactDom from 'react-dom';
import LoginForm from './LoginForm';


test('it renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<LoginForm />, div)
  ReactDom.unmountComponentAtNode(div)
})