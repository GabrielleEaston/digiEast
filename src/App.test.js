import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App component', () => {
  let component
  beforeEach(() => {
    component = shallow(<App />)
  })
  it('should render as expected', () => {
    expect(component.contains('Digi East')).toBe(true)
  })
  it('should render as expected', () => {
    expect(component.contains('Home')).toBe(true)
  })
  it('should have a state attribute called term initialized to empty string',
    () => {
      expect(component.state('term')).toEqual('')
    })
  it('should have a state attribute called pinboardname initialized to My Photo Collection',
    () => {
      expect(component.state('pinBoardName')).toEqual('My Photo Collection')
    })


})




