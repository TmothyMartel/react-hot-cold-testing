import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />)
	});

	// test restart game
	it('should reset the state / start new game', () => {
		let wrapper = shallow(<Game />);
		wrapper.setState({
		guesses: [23, 34, 67, 11],
		feedback: 'no even close',
		correctAnswer: 90
		});
		wrapper.instance().restartGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100)
		
	});
	
      // test make guess
      it('can make a guess', () => {
      	let wrapper = shallow(<Game />);
      	wrapper.setState({
      		correctAnswer: 10
      	});

      	wrapper.instance().makeGuess(80);
      	expect(wrapper.state('guesses')).toEqual([80]);
      	expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
     
      	wrapper.instance().makeGuess(7);
      	expect(wrapper.state('guesses')).toEqual([80, 7]);
      	expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

      	wrapper.instance().makeGuess(10);
      	expect(wrapper.state('guesses')).toEqual([80, 7, 10]);
      	expect(wrapper.state('feedback')).toEqual('You got it!')
       });
});