import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BurgerMenuBase, MenuBase } from './BurgerMenu.style';
import { useRoutes } from '../Router/routes';

export const BurgerMenu = () => {
	const { Home, About, Companies, Contact, Projects } = useRoutes();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsMenuOpen(false);
	}, [location]);

	return (
		<>
			<BurgerMenuBase
				isOpen={isMenuOpen}
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}>
				<div></div>
				<div></div>
				<div></div>
			</BurgerMenuBase>
			<MenuBase isOpen={isMenuOpen}>
				<Link to={Home}>Home</Link>
				<Link to={About}>About</Link>
				<Link to={Companies}>Companies</Link>
				<Link to={Projects}>Projects</Link>
				<Link to={Contact}>Contact</Link>
			</MenuBase>
		</>
	);
};
