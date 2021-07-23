import React, { useRef } from 'react';
import Nimbostratus from '../clouds/Nimbostratus';
import { NimbostratusOne } from '../clouds/clouds';

const SectionFour = () => {
	return (
		<section className='section-four'>
			<Nimbostratus top={1} left={-50}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={1} left={20}>
				<NimbostratusOne />
			</Nimbostratus>
			<div className='section-four-text'>
				<h2>Thanks for visiting Airship blog</h2>
			</div>
		</section>
	);
};

export default SectionFour;
