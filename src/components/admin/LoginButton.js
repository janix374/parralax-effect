import React from 'react';
import loginPics from '../../images/login.png';
import { Link } from 'react-router-dom';

const LoginButton = () => {
	return (
		<div className='login-button'>
			<Link to='/login'>
				<img src={loginPics} alt='login' />
			</Link>
		</div>
	);
};

export default LoginButton;
