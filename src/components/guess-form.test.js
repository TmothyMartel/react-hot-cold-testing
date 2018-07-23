import React from 'react';
import {shallow, mount} from 'enzyme';

import GameForm from './guess-form'

describe('<GameForm />', () => {
	it('renders without crashing', () => {
		shallow(<GameForm />);
	})
})