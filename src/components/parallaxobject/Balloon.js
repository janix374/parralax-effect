import React, { useRef, useState, useEffect } from 'react';
import balloonPics from '../../images/balloon.png';
import PropTypes from 'prop-types';

const Balloon = ({ topOffSet }) => {
	const balloonRef = useRef();
	const [offsetY, setOffsetY] = useState(0);
	const hendleScroll = () => setOffsetY(window.pageYOffset);
	let styles = {
		transform: `translateY(0px)`,
		top: `${topOffSet}px`,
	};

	if (offsetY < topOffSet - 1000) {
		styles = { transform: `translateY(0px)`, top: `${topOffSet}px` };
	} else {
		styles = {
			transform: `translateY(${(topOffSet + 1000 - offsetY) * 0.6}px)`,
			top: `${topOffSet}px`,
		};
	}

	useEffect(() => {
		window.addEventListener('scroll', hendleScroll);
		return () => window.removeEventListener('scroll', hendleScroll);
	}, []);
	return (
		<div className='parallax-object-balloon' ref={balloonRef} style={styles}>
			<img src={balloonPics} alt='balloon' />
		</div>
	);
};

Balloon.propTypes = {
	topOffSet: PropTypes.number,
};

export default Balloon;
