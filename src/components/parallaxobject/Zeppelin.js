import React, { useRef, useState, useEffect } from 'react';
import zeppelin from '../../images/zeppelin.png';
import PropTypes from 'prop-types';

const Zeppelin = ({ topOffSet }) => {
	const zzeppelinRef = useRef();
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
			transform: `translateX(${(offsetY - topOffSet + 1000) * -0.6}px)`,
			top: `${topOffSet}px`,
		};
	}

	useEffect(() => {
		window.addEventListener('scroll', hendleScroll);
		return () => window.removeEventListener('scroll', hendleScroll);
	}, []);

	return (
		<div className='parallax-object-zeppelin' ref={zzeppelinRef} style={styles}>
			<img src={zeppelin} alt='birds' />
		</div>
	);
};

Zeppelin.propTypes = {
	topOffSet: PropTypes.number,
};

export default Zeppelin;
