import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import morePics from '../../images/more.png';

const SectionThree = ({ articles, handleLimit, limit }) => {
	return (
		<section className='section-three'>
			<div className='section-three-text-title'>
				<h2>Air-Ship Articles</h2>
			</div>
			{articles.map((item) => {
				const date1 = item.createDate.toDate().toDateString();
				const date2 = item.createDate.toDate().toLocaleTimeString('en-US');
				return (
					<div key={item.id} className='section-three-text'>
						<div className='section-three-article-card'>
							<div className='section-three-article-card-image'></div>
							<div className='section-three-article-card-title'>
								<h3>{item.title}</h3>
							</div>
							<div className='section-three-article-card-created'>
								{date1} {date2}
							</div>
							<div className='section-three-article-card-content'>
								{parse(item.content)}
							</div>
						</div>
					</div>
				);
			})}

			{articles.length < limit ? (
				''
			) : (
				<div className='more-button'>
					<img src={morePics} alt='more' onClick={() => handleLimit()} />
				</div>
			)}
		</section>
	);
};

SectionThree.propTypes = {
	offsetY: PropTypes.number,
};

export default SectionThree;
