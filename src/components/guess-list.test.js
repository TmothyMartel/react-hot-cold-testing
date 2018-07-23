import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	const seedGuesses = [];
	beforeAll(() => {
		for (let i = 0; i < 10; i++) {
			seedGuesses.push(i);
		}
	});

	it('Renders without crashing', () => {
		shallow(<GuessList guesses={seedGuesses} />)
	});
});