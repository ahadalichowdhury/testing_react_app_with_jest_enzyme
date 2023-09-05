import React from 'react';
import App from "./App"
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new EnzymeAdapter()});


test("render without errors",()=>{
  const wrapper = shallow(<App/>)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
  
})

test("render increment button",()=>{
  
})

test("render counter display",()=>{
  
})

test("render display start at 0",()=>{
  
})

test("clicking on button increments counter display",()=>{
  
})
