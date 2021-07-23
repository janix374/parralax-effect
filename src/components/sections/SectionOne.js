import React from 'react';
import Cumulus from '../clouds/Cumulus';
import {
	CumulusOne,
	CumulusTwo,
	CumulusThree,
	CumulusFour,
} from '../clouds/clouds';
import TextForSectionOne from '../staticcomponent/TextForSectionOne';

const SectionOne = () => {
	return (
		<section className='section-one'>
			<div className='section-one-animations'>
				<Cumulus top={2} left={-20}>
					<CumulusOne />
				</Cumulus>

				<Cumulus top={5} left={45}>
					<CumulusOne />
				</Cumulus>

				<Cumulus top={14} left={-30}>
					<CumulusTwo />
				</Cumulus>

				<Cumulus top={20} left={50}>
					<CumulusOne />
				</Cumulus>

				<Cumulus top={33} left={-20}>
					<CumulusOne />
				</Cumulus>

				<Cumulus top={40} left={30}>
					<CumulusThree />
				</Cumulus>

				<Cumulus top={49} left={-20}>
					<CumulusTwo />
				</Cumulus>

				<Cumulus top={60} left={30}>
					<CumulusFour />
				</Cumulus>

				<Cumulus top={70} left={-30}>
					<CumulusThree />
				</Cumulus>

				<Cumulus top={80} left={60}>
					<CumulusThree />
				</Cumulus>
			</div>
			<TextForSectionOne />
		</section>
	);
};

export default SectionOne;
