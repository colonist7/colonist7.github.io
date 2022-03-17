import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { routes } from './routes';

const MainRouter = () => {
	return (
		<Router>
			<Header />
			<Routes>
				{Object.keys(routes).map((key, i) => {
					return <Route key={i} path={routes[key].path} element={routes[key].main}></Route>;
				})}
			</Routes>
		</Router>
	);
};

export default MainRouter;
