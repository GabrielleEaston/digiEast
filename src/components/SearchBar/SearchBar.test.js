import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';


describe('SearchBar component', () => {
  let component
  beforeEach(() => {
    component = shallow(<SearchBar />)
  })
  it('should have button search', () => {
    expect(component.contains(<button className="SearchButton">SEARCH</button>)).toBe(true)
  })
  it('should have input ', () => {
    expect(component.contains(<input placeholder="Enter what you want to see ... " />)).toBe(true)
  })
  it('should have div ', () => {
    expect(component.contains(<div className="SearchBar">
    <input  placeholder="Enter what you want to see ... " />
    <button className="SearchButton">SEARCH</button>
  </div>)).toBe(true)
  })
  
  
})