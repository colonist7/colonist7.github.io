import React from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { HeaderBase } from './Header.style';

export const Header = () => {
	return (
		<HeaderBase>
			<BurgerMenu />
		</HeaderBase>
	);
};
