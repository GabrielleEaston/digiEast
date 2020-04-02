import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import github from './github.png';
import logo from '../assets/logo.png';

describe('footer component', () => {
  let component
  beforeEach(() => {
    component = shallow(<Footer />)
  })
  it('should have span ©2019 by Gabrielle Easton', () => {
    expect(component.contains(<span>©2019 by Gabrielle Easton</span>)).toBe(true)
  })
  
  it('should have a paragraph', () => {
    expect(component.contains(<p>Build with React| Unsplash API </p>)).toBe(true)
  })
  it('should have an img linked to github', () => {
    expect(component.contains(<a href="https://github.com/GabrielleEaston/digiEast"><img src={github}></img></a>)).toBe(true)
  })
  it('should have a small', () => {
    expect(component.contains(<small>Using jest enzyme testing</small>)).toBe(true)
  })
  it('should have a logo', () => {
    expect(component.contains(<img src={logo} alt="logo"></img>)).toBe(true)
  })
  
})
