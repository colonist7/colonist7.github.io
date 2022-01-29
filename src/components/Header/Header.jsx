import React from 'react';
import { Link } from 'react-router-dom';
import { useRoutes } from '../Router/routes';
import { HeaderBase } from './Header.style';

export const Header = () => {
	const { Home, About } = useRoutes();

	return (
		<HeaderBase>
			<Link to={Home}>Home</Link>

			<Link to={About}>About</Link>
		</HeaderBase>
	);
};
