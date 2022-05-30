import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../../assets/templateVars';

const setDelay = (n) => {
	let style = '';
	for (let i = 0; i < n; i++) {
		style += `	
			&:nth-child(${i}) {
				animation-delay: ${i * 2}s;
			}
		`;
	}

	return style;
};

const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

const lookTo = (x, y) => {
	let X = WIDTH / 2 / x;
	let Y = HEIGHT / 2 / y;

	return `transform: translate(${X > 1.1 ? '-20px' : X < 0.9 ? '20px' : 0},  ${
		Y > 1.1 ? '-20px' : Y < 0.9 ? '20px' : 0
	})`;
};

export const HomeBase = styled.div`
	animation: SlideFromUp 0.3s linear;
`;

export const Screen = styled.div`
	width: 800px;
	height: 600px;
	margin: 40px auto;
	border: 5px solid white;
	border-radius: 10px;
	box-shadow: 0 0 40px 10px ${colors.teritariry};
	display: flex;
	align-items: center;
	justify-content: center;

	.start {
		margin: auto;
		cursor: pointer;
	}

	.faded-out {
		pointer-events: 0;
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}

	.faded-in {
		pointer-events: 0;
		opacity: 1;
		transition: all 0.3s ease-in-out;
	}

	.smile {
		position: relative;
		width: 100%;
		height: 100%;

		.eye {
			position: absolute;
			width: 100px;
			height: 100px;
			border: 2px solid ${colors.teritariry};
			display: flex;
			justify-content: center;
			border-radius: 50%;
			align-items: center;

			.guga {
				width: 50px;
				height: 50px;
				border: 2px solid ${colors.teritariry};
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				transition: all 0.5s ease-in-out;

				${({ x, y }) => lookTo(x, y)}
			}
		}

		.left {
			top: 100px;
			left: 200px;
		}

		.right {
			top: 100px;
			right: 200px;
			animation: closeEye 5s linear infinite;
		}

		.mouth {
			position: absolute;
			width: calc(100% - 400px);
			height: 30px;
			left: 50%;
			bottom: 150px;
			transform: translatex(-50%);
			background: transparent;
			border: 2px solid ${colors.teritariry};
		}

		.lip {
			position: absolute;
			width: calc(100% - 450px);
			height: 30px;
			left: 50%;
			bottom: 122px;
			transform: translatex(-50%);
			background: transparent;
			border: 2px solid ${colors.teritariry};
			border-top-color: #121212;

			&:before {
				content: '';
				display: block;
				position: absolute;
				width: 80%;
				height: 30px;
				left: 50%;
				top: 26px;
				transform: translatex(-50%);
				background: transparent;
				border: 2px solid ${colors.teritariry};
				border-top-color: #121212;
			}
		}
	}

	.loader {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 3px solid white;
		position: absolute;
		left: calc(50% - 75px);
		top: calc(50%);
		opacity: 1;
		animation: scaleAndFade 6s linear infinite;

		${setDelay(3)};
	}

	@keyframes scaleAndFade {
		0% {
			transform: scale(0);
			opacity: 0;
		}

		10% {
			opacity: 1;
		}

		90% {
			opacity: 1;
		}

		100% {
			transform: scale(1.5);
			opacity: 0;
		}
	}
`;
