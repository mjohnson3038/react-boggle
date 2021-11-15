import { render, screen } from '@testing-library/react';
import Game from './App';
import { shallow, mount } from 'enzyme'; // by Airbnb, curly braces around shallow because it is not a default export in enzyme


describe('getLettersForDisplay', () => {
  test('selects correct letters', () => {
    // https://bambielli.com/til/2018-03-04-directly-test-react-component-methods/
  
    const wrapper = shallow(<Game/>);
    const instance = wrapper.instance();
    
    const lettersForDisplay = instance.getLettersForDisplay(
      [1,4,2,3,5,9,6,7,8,10,0,14,12,11,13,15], 
      [1,2,3,2,3,0,4,5,2,5,3,4,5,3,0,2]
    )
  
    expect(lettersForDisplay).toStrictEqual(
      ['F', 'S', 'O', 'O', 'E', 'E', 'O', 'E', 'M', 'N', 'O', 'R', 'D', 'I', 'R', 'C']
    );
  });
})

