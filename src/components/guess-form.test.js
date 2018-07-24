import React from 'react';
import {shallow, mount} from 'enzyme';

import GameForm from './guess-form'

describe('<GameForm />', () => {
	it('renders without crashing', () => {
		shallow(<GameForm />);
	});

	//test that on submit works

	it('should call onMakeGuess when submit', () => {
		let callBack =jest.fn();
		let wrapper = mount(<GameForm onMakeGuess={callBack} />);
		let guess = 45;
		wrapper.find('.text').instance().value = guess;
		wrapper.simulate('submit');
		expect(callBack).toHaveBeenCalledWith(guess.toString());
	});
})