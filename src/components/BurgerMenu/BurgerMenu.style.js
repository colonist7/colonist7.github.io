import styled from 'styled-components';
import { colors } from '../../assets/templateVars';

export const BurgerMenuBase = styled.div`
	width: 30px;
	height: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
	overflow: hidden;

	& > div {
		width: 100%;
		height: 5px;
		margin: 0 auto 5px;
		background: ${colors.white};
		transition: all 0.3s ease-in-out;
		animation: ${({ isOpen }) => !isOpen && 'Blink 10s linear infinite'};
		border-radius: 10px;
	}

	& > div:nth-child(1) {
		transform: translateY(0) rotate(${({ isOpen }) => (isOpen ? '48deg' : 0)});
		transform-origin: 3px 6px;
		animation: ${({ isOpen }) => isOpen && 'moveDown 0.5s linear'};
	}
	& > div:nth-child(2) {
		transform: translatex(${({ isOpen }) => (isOpen ? '-100%' : 0)});
		animation: ${({ isOpen }) => !isOpen && 'Blink 10s linear infinite'};
		animation-delay: 0.2s;
	}
	& > div:nth-child(3) {
		transform: rotate(${({ isOpen }) => (isOpen ? '-48deg' : 0)});
		transform-origin: 3px -1px;
		animation-delay: 0.4s;
		animation: ${({ isOpen }) => isOpen && 'moveUp 0.5s linear'};
	}

	&:hover {
		& > div:nth-child(2) {
			width: ${({ isOpen }) => (isOpen ? '100%' : '60%')};
			margin: 0 auto 5px;
		}

		& > div:nth-child(3) {
			animation-delay: 0s;
		}
	}

	@keyframes moveDown {
		0% {
			transform: translateY(0) rotate(0);
		}

		50% {
			transform: translateY(10px) rotate(0);
		}
		60% {
			transform: translateY(10px) rotate(0);
		}

		100% {
			transform: translateY(0) rotate(48deg);
		}
	}

	@keyframes moveUp {
		0% {
			transform: translateY(0) rotate(0);
		}

		50% {
			transform: translateY(-15px) rotate(0);
		}
		60% {
			transform: translateY(-15px) rotate(0);
		}

		100% {
			transform: translateY(0) rotate(-48deg);
		}
	}
`;

export const MenuBase = styled.div`
	padding: 10px 10px 10px 0;
	position: fixed;
	width: ${({ isOpen }) => (isOpen ? '180px' : '52px')};
	right: 0;
	top: 40px;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: left;
	flex-direction: column;
	transition: all 0.3s ease-in-out;
	z-index: 20;

	a {
		color: #f4f4f4;
		text-decoration: none;
		font-size: 20px;
		height: 50px;
		padding: 10px;
		margin-bottom: 20px;
		font-family: Calculator;
		display: flex;
		position: relative;
		align-items: center;

		div {
			display: flex;
			justify-content: center;
			width: ${({ isOpen }) => (isOpen ? '60px' : '100%')};
			transition: all 0.3s ease-in-out;

			svg {
				path {
					fill: ${colors.white};
				}
			}
		}

		span {
			width: 120px;
			animation: grow 0.5s linear;
			margin-left: 15px;
			overflow: hidden;
			display: block;
		}
	}

	@keyframes grow {
		0% {
			width: 0;
			opacity: 0;
			padding-left: 0;
		}

		50% {
			width: 120px;
			padding-left: 0;
			opacity: 0;
		}

		100% {
			width: 120px;
			opacity: 1;
		}
	}
`;
