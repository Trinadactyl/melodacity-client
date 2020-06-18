import React from 'react'
import ReactDom from 'react-dom'
import LoginPage from './LoginPage'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<LoginPage />, div)
  ReactDom.unmountComponentAtNode(div)
})