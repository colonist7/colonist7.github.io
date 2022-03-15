import styled from 'styled-components';
import { colors } from '../../assets/templateVars';
import calc from '../../assets/fonts/digital-7.ttf';

export const ContactBase = styled.div`
	@font-face {
		font-family: Calculator;
		src: url(${calc});
	}

	.heading {
		font-family: Calculator;
		font-size: 100px !important;
		margin: 50px auto 0;
		text-align: center;
		animation: FadeIn 2s linear;
		user-select: none;

		span {
			margin: 0 10px;
			opacity: 1;
			color: #f4f4f4;
			text-shadow: 0 0 5px ${colors.textShadow};
		}

		& > span:nth-child(5) {
			animation: blink 5s linear infinite;
			animation-delay: 2s;
			position: relative;
		}

		.heading2 {
			font-family: Calculator;
			font-size: 100px !important;
			margin: 50px auto 0;
			text-align: center;
			opacity: 0.3;
			position: absolute;
			top: 70px;
			left: 50%;
			transform: translateX(-50%);
			z-index: -1;

			span {
				color: ${colors.teritariry};
				z-index: -1;
			}
		}
	}

	.contacts {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: calc(35vh - 200px);

		& > div {
			display: flex;
			align-items: center;

			svg {
				font-size: 50px;
				margin-right: 10px;
			}

			span {
				font-weight: bold;
				margin-right: 10px;
			}

			a {
				color: #f4f4f4;
				text-decoration: none;
			}
		}
	}

	.light {
		width: 1px;
		height: 1px;
		box-shadow: 0 0 60px 30px ${colors.teritariry};
		position: absolute;
		left: 0;
		top: 0;
		transition: all 0.5s ease-in-out;
		pointer-events: none;
		z-index: -1;
	}

	.hovered {
		transition: all 0s ease-in-out;
	}

	.block {
		width: 200px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.3s ease-in-out;
	}

	@keyframes FadeIn {
		0 {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}

		60% {
			opacity: 1;
		}

		61% {
			opacity: 0;
		}
		65% {
			opacity: 0;
		}
		66% {
			opacity: 1;
		}

		95% {
			opacity: 1;
		}
		96% {
			opacity: 0;
		}

		99% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
`;
