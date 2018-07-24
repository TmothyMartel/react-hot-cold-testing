import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />)
	});

	// test event listeners
	it('should call onRestartGame when clicked', () => {
		let callBack = jest.fn();
		let wrapper = shallow(<TopNav onRestartGame={callBack} />)
		let newGame = wrapper.find('.new');
		newGame.simulate('click', {
			preventDefault() {}
		});
		expect(callBack).toHaveBeenCalled();
	});

	it('should call onGenerateAuralUpdate when clicked', () => {
		let callBack =jest.fn();
		let wrapper = shallow(<TopNav onGenerateAuralUpdate={callBack} />);
		let link = wrapper.find('.status-link');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callBack).toHaveBeenCalled();
	});
});