import React from 'react';
import App from "./App"
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new EnzymeAdapter()});

//ekhon amra bar bar jate repeat na korte hoy ei jonno common korar jonno ekta function banabo
//jate amra bar bar shallow wrapper create na korte hoy

/** 
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App/>)

const findByTestAttributes = (wrapper, val) => wrapper.find(`[data-test='${val}']`)


// test("render without errors",()=>{
//   const wrapper = shallow(<App/>)
//   const appComponent = wrapper.find("[data-test='component-app']")
//   expect(appComponent.length).toBe(1)
  
// })

test("render without errors",()=>{
  const wrapper = setup()
  const appComponent = findByTestAttributes (wrapper, "component-app")
  expect(appComponent.length).toBe(1)
  
})

test("render increment button",()=>{
  const wrapper = setup()
  const button = findByTestAttributes(wrapper, "increment-button")
  expect(button.length).toBe(1)
})

test("render counter display",()=>{
  const wrapper = setup()
  const displayComponent = findByTestAttributes(wrapper, "display-component")
  expect(displayComponent.length).toBe(1)
})

//find the .text() method in the enzyme documentation. This always return a string
test("render display start at 0",()=>{
  const wrapper = setup()
  const count = findByTestAttributes(wrapper, "count").text()
  expect(count).toBe("0")
})

test("clicking on button increments counter display",()=>{
  //find the button
  const wrapper = setup()
  const button = findByTestAttributes(wrapper, "increment-button")

  //click the button
  //for clicking the button, we need to use the .simulate() method
  button.simulate("click")
  //find the display , and test that the number has been incremented
  const count = findByTestAttributes(wrapper, "count").text()
  expect(count).toBe("1")

})

test("clicking on button to decrement the value", ()=>{
  //find the decrement button
  const wrapper = setup()
  const decrementButton = findByTestAttributes(wrapper, "decrement-button")

  //click the decrement button
  decrementButton.simulate("click")

  //find the display and test that the number has been decremented
  const count = findByTestAttributes(wrapper, "count").text()
  expect(count).toBe("-1")
})