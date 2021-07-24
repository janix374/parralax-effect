import React, { useRef, useState, useEffect } from 'react';
import birdsPics from '../../images/birds.png';
import PropTypes from 'prop-types';

const Birds = ({ topOffSet }) => {
	const birdsRef = useRef();
	const [offsetY, setOffsetY] = useState(0);
	const hendleScroll = () => setOffsetY(window.pageYOffset);
	let styles = {
		transform: `translateX(0px)`,
		top: `${topOffSet}px`,
	};

	if (offsetY < topOffSet - 1000) {
		styles = { transform: `translateX(0px)`, top: `${topOffSet}px` };
	} else {
		styles = {
			transform: `translateX(${(offsetY - topOffSet + 1000) * 0.6}px)`,
			top: `${topOffSet}px`,
		};
	}

	useEffect(() => {
		window.addEventListener('scroll', hendleScroll);
		return () => window.removeEventListener('scroll', hendleScroll);
	}, []);

	return (
		<div className='parallax-object-birds' ref={birdsRef} style={styles}>
			<img src={birdsPics} alt='birds' />
		</div>
	);
};

Birds.propTypes = {
	topOffSet: PropTypes.number,
};

export default Birds;
