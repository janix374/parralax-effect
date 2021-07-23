import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import editPics from '../../images/edit.png';
import delPics from '../../images/delete.png';
import PropTypes from 'prop-types';

const ArticleView = ({ article, handleDelete }) => {
	const timestamp = (ts) => {
		const date = new Date(ts * 1000);
		return (
			date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
		);
	};
	const timestampminut = (ts) => {
		const date = new Date(ts * 1000);
		return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	};

	return (
		<>
			<div className='article-view-card'>
				{article.featureImage.length == 0 ? (
					''
				) : (
					<div
						className='article-view-card-picture'
						style={{
							backgroundImage: `url(${article.featureImage})`,
						}}
					></div>
				)}

				<div className='article-view-card-title'>
					<h2>{article.title}</h2>
				</div>
				<div className='article-view-card-created'>
					{timestamp(article.createDate.seconds)}
					<br />
					{timestampminut(article.createDate.seconds)}
				</div>
				<div className='article-view-card-content'>
					{parse(article.content)}
				</div>
				<div className='article-view-card-button'>
					<div>
						<Button>
							<Link to={`/dashboard/article/${article.id}`}>
								<img src={editPics} alt='edit' title='Edit' />
							</Link>
						</Button>
					</div>
					<div>
						<Button onClick={() => handleDelete(article.id)}>
							<img src={delPics} alt='delete' title='Delete' />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

ArticleView.propTypes = {
	article: PropTypes.object,
	handleDelete: PropTypes.func,
};

export default ArticleView;
