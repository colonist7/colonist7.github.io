import styled from 'styled-components';
import { colors } from '../../assets/templateVars';

export const BurgerMenuBase = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	overflow: hidden;

	& > div {
		width: 100%;
		height: 3px;
		margin-bottom: 10px;
		background: #fff;
		transition: all 0.3s ease-in-out;
	}

	& > div:nth-child(1) {
		transform: rotate(${({ isOpen }) => (isOpen ? '48deg' : 0)});
		transform-origin: 0 10px;
	}
	& > div:nth-child(2) {
		transform: translatex(${({ isOpen }) => (isOpen ? '-100%' : 0)});
	}
	& > div:nth-child(3) {
		transform: rotate(${({ isOpen }) => (isOpen ? '-48deg' : 0)});
		transform-origin: 19px 1px;
	}
`;

export const MenuBase = styled.div`
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	width: 60%;
	position: fixed;
	left: ${({ isOpen }) => (isOpen ? '-10%' : '-100%')};
	top: 0;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: ${colors.primary};
	transition: left 0.3s ease-in-out, opacity 0.3s ease-in-out;

	a {
		color: #fff;
		text-decoration: none;
		font-size: 20px;
		margin-bottom: 20px;
	}
`;
