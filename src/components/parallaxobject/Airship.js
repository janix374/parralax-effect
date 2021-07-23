import React, { useState, useEffect } from 'react';
import airship from '../../images/airship.png';
import PropTypes from 'prop-types';

const Airship = () => {
	const [hideAirShip, setHideAirShip] = useState(false);
	let styles = { transform: `translateX(0px)` };

	// if (offsetY < 5000) {
	// 	styles = { transform: `translateX(0px)` };
	// } else if (offsetY < 15000) {
	// 	styles = { transform: `translateX(${(offsetY - 5000) * 0.1}px)` };
	// } else if (offsetY < 20000) {
	// 	styles = { transform: `translateX(1000px)` };
	// } else if (offsetY < 30000) {
	// 	styles = { transform: `translateX(${1000 - (offsetY - 20000) * 0.1}px)` };
	// } else if (offsetY < 100000) {
	// 	styles = { transform: `translateX(0px)` };
	// }

	const handleHiding = () => {
		setHideAirShip(!hideAirShip);
	};

	return (
		<>
			{hideAirShip ? (
				<button
					className='parallax-object-airship-button'
					type='button'
					onClick={handleHiding}
				>
					<img src={airship} alt='airship' />
				</button>
			) : (
				''
			)}

			<div className='parallax-object-airship' style={styles}>
				{hideAirShip ? (
					''
				) : (
					<img src={airship} alt='airship' onClick={handleHiding} />
				)}
			</div>
		</>
	);
};

Airship.propTypes = {
	offsetY: PropTypes.number,
};

export default Airship;
