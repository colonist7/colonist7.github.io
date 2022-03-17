import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BurgerMenuBase, MenuBase } from './BurgerMenu.style';
import { faHome, faUser, faBuildingColumns, faFolder, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRoutes } from '../Router/routes';

export const BurgerMenu = () => {
	const { Home, About, Companies, Contact, Projects } = useRoutes();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const nav = [
		{
			icon: faHome,
			link: Home,
			title: 'Home',
		},
		{
			icon: faUser,
			link: About,
			title: 'About',
		},
		{
			icon: faBuildingColumns,
			link: Companies,
			title: 'Companies',
		},
		{
			icon: faFolder,
			link: Projects,
			title: 'Projects',
		},
		{
			icon: faPhone,
			link: Contact,
			title: 'Contact',
		},
	];

	const toTop = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		setIsMenuOpen(false);
	}, [location]);

	return (
		<>
			<BurgerMenuBase
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}
				isOpen={isMenuOpen}>
				<div></div>
				<div></div>
				<div></div>
			</BurgerMenuBase>
			<MenuBase isOpen={isMenuOpen}>
				{nav.map((item, i) => (
					<Link
						onClick={() => {
							toTop();
						}}
						key={i}
						to={item.link}>
						<div>
							<FontAwesomeIcon icon={item.icon} title={item.title} />
						</div>
						{isMenuOpen && <span> {item.title}</span>}
					</Link>
				))}
			</MenuBase>
		</>
	);
};
