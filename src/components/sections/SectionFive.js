import React from 'react';
import mountainsPics from '../../images/mountains.png';

const SectionFive = () => {
	return (
		<section className='section-five'>
			<div
				className='section-five-mountains'
				style={{ backgroundImage: `url(${mountainsPics})` }}
			></div>
		</section>
	);
};

export default SectionFive;
