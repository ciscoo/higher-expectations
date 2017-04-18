import React from 'react'
import {render} from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin'
import renderer from 'react-test-renderer'

beforeAll(() => {
  injectTapEventPlugin()
})

describe('Testing App component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    render(<App />, div)
  })
})
