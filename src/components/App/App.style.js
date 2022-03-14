import { fadeOut } from 'react-animations';
import calc from '../../assets/fonts/digital-7.ttf';
import spaceMono from '../../assets/fonts/SpaceMono-Regular.ttf';
import spaceMonoItalic from '../../assets/fonts/SpaceMono-Italic.ttf';
import spaceMonoBold from '../../assets/fonts/SpaceMono-Bold.ttf';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const fadeOutAnimation = keyframes`${fadeOut}`;

let circilize = () => {
	let style = '';

	for (let i = 0; i < 100; i++) {
		style += `
		.s-${i} {
			transform: rotate(${i * 20}deg); 
		}`;
	}

	return style;
};

export const Curtains = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	background: black;
	animation: 1s ${fadeOutAnimation};
	animation-delay: 2s;

	.shadow {
		position: absolute;
		background: transparent;
		border: 5px solid white;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.6);
		border-radius: 50%;
		z-index: 10;
		width: 250px;
		height: 250px;
		animation: 6s CustomRotate linear infinite;
		border: 0;
		/* 
		transform-origin: 50 50; */

		& div {
			width: 15px;
			height: 250px;
			background: transparent;
			position: absolute;
			border-top: 6px solid white;
			border-bottom: 6px solid white;
			left: 115px;
			top: -5px;

			&::after {
				content: '';
				position: absolute;
				top: -5px;
				left: 0;
				width: 100%;
				height: 5px;
				background: transparent;
				display: block;
				box-shadow: 0 0 10px 0 blue;
			}

			&::before {
				content: '';
				position: absolute;
				bottom: -5px;
				left: 0;
				width: 100%;
				height: 5px;
				background: transparent;
				display: block;
				box-shadow: 0 0 10px 0 blue;
			}
		}

		${circilize()}
	}

	.loading {
		width: 500px;
		height: 10px;
		position: absolute;
		background: #00000c;
		left: 50%;
		top: 80%;
		transform: translateX(-50%);
		color: #fff;
		line-height: 80px;
		text-align: center;
		text-shadow: 1px 1px blue;

		&::before {
			content: '';
			width: 0;
			position: absolute;
			display: block;
			left: 0;
			top: 0;
			height: 10px;
			background: white;
			box-shadow: 0 0 10px 0 blue;
			animation: 2s Loading linear;
		}
	}

	@keyframes CustomRotate {
		0 {
			transform: translate(-50%, -50%) scale(0.6) rotate(0deg);
		}

		100% {
			transform: translate(-50%, -50%) scale(0.6) rotate(360deg);
		}
	}

	@keyframes Loading {
		0 {
			width: 0;
		}
		25% {
			width: 25%;
		}
		30% {
			width: 25%;
		}
		60% {
			width: 50%;
		}
		80% {
			width: 50%;
		}
		100% {
			width: 100%;
		}
	}
`;

export const AppBase = styled.div``;

const GlobalStyle = createGlobalStyle`	
	@font-face {
		font-family: Calculator;
		src: url(${calc});
	}

	@font-face {
		font-family: SpaceMono;
		src: url(${spaceMono});
	}
	/* @font-face {
		font-family: SpaceMono;
		src: url(${spaceMonoItalic});
		font-style: italic, oblique;
	} */
	
	@font-face {
		font-family: SpaceMono;
		src: url(${spaceMonoBold});
		font-weight: bold;
	}
	
	* {
		box-sizing: border-box;
	}

	p {
		margin: 0;
	}

	body {
		margin: 0;
		padding: 0;
		color: #fff;
		background: teal;	
		font-size: 16px;
		font-family: SpaceMono;	
		background: #000000;

		
		h1,h2,h3,h4 {
			font-family: Calculator;	
		}

	}
`;

export default GlobalStyle;
