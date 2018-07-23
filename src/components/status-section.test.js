import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
	const seedGuesses = [];
	beforeAll(() => {
		for (let i = 0; i < 10; i++) {
			seedGuesses.push(i);
		}
	});

	it('Renders without crashing', () => {
		shallow(<StatusSection guesses={seedGuesses} />)
	});
});