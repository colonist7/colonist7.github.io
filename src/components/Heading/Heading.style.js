import styled from 'styled-components';

export const HeadingBase = styled.div`
	.heading {
		font-family: Calculator;
		font-size: 100px !important;
		margin: 50px auto;
		text-align: center;
		animation: FadeIn 2s linear;
		user-select: none;

		span {
			margin: 0 10px;
			opacity: 1;
			color: #fff;
			text-shadow: 0 0 5px rgba(0 255 0);
		}

		& > span:nth-child(5) {
			animation: blink 5s linear infinite;
			animation-delay: 2s;
			position: relative;
		}

		& > span:nth-child(1) {
			animation: blink 6s linear infinite;
			animation-delay: 0s;
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
			color: #0f0;
			text-shadow: unset;
			display: block;

			span {
				color: #0f0;
				z-index: -1;
			}
		}
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
