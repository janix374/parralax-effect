import React, { useEffect, useState } from 'react';
import Sky from './mainfile/Sky';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';
import ArticleCreate from './admin/ArticleCreate';
import AdminLogin from '../components/admin/AdminLogin';
import AuthProvider from '../contexts/AuthContext';
import PrivateRoute from './admin/PrivateRoute';
import firebase from '../config/firebase';

const db = firebase.firestore();

const AppContainer = () => {
	const [articles, setArticles] = useState([]);
	const [limit, setLimit] = useState(5);

	const getMyArticles = (limit) => {
		db.collection('Articles')
			.orderBy('createDate', 'desc')
			.limit(limit)
			.get()
			.then((docs) => {
				if (!docs.empty) {
					let allArticles = [];
					docs.forEach((doc) => {
						const article = {
							id: doc.id,
							...doc.data(),
						};
						allArticles.push(article);
					});
					setArticles(allArticles);
				}
			});
	};

	const handleLimit = () => {
		setLimit(limit + 5);
	};

	useEffect(() => {
		getMyArticles(limit);
	}, [limit]);

	return (
		<div>
			<Router>
				<AuthProvider>
					<Switch>
						<Route path='/' exact>
							<Sky
								articles={articles}
								handleLimit={handleLimit}
								limit={limit}
							/>
						</Route>
						<PrivateRoute path='/dashboard' exact component={AdminDashboard} />
						<PrivateRoute
							path='/dashboard/article'
							exact
							component={ArticleCreate}
						/>
						<PrivateRoute
							path='/dashboard/article/:id'
							exact
							component={ArticleCreate}
						/>
						<Route path='/login' exact>
							<AdminLogin />
						</Route>
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
};

export default AppContainer;
