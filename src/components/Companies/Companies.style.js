import styled from 'styled-components';
import { colors } from '../../assets/templateVars';
import { ParallaxBase } from '../Parallax/Parallax.style';

export const CompaniesBase = styled.div`
	animation: SlideFromUp 0.3s linear;

	h1 {
		text-align: center;
	}

	${ParallaxBase} {
		z-index: 10;
	}
	${ParallaxBase}:first-child {
		left: 60px;
	}

	${ParallaxBase}:nth-child(2) {
		right: 90px;
		animation-delay: 2s;
	}

	${ParallaxBase}:nth-child(3) {
		left: 90px;
		animation-delay: 4s;
	}

	${ParallaxBase}:nth-child(4) {
		right: 90px;
		animation-delay: 6s;
	}

	${ParallaxBase}:nth-child(5) {
		left: 90px;
		animation-delay: 8s;
	}
	/* } */
`;

export const CompanyCardBase = styled.div`
	display: flex;
	margin-bottom: 30px;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
	border-radius: 30%;
	text-align: center;

	cursor: pointer;

	&:before {
		content: '${({ contentLeft }) => contentLeft}';
		color: #f4f4f4;
		text-align: right;
		width: 50%;
		height: 100%;
		background: #121212;
		display: flex;
		align-items: center;
		font-size: 40px;
		justify-content: flex-end;
		position: absolute;
		left: 0;
		top: 0;
		transition: all 0.7s ease-in-out;
		font-family: Calculator;
		pointer-events: none;
	}

	&:after {
		content: '${({ contentRight }) => contentRight}';
		color: #f4f4f4;
		text-align: left;
		width: 50%;
		height: 100%;
		background: #121212;
		display: flex;
		align-items: center;
		font-size: 40px;
		position: absolute;
		right: 0;
		top: 0;
		transition: all 0.7s ease-in-out;
		pointer-events: none;
		font-family: Calculator;
	}

	&:hover {
		&:before {
			left: -100%;
		}

		&:after {
			right: -100%;
		}
	}

	.image-wrapper {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 30px;
		border: 1px solid white;
		transition: all 0.3s ease-in-out;

		&:hover {
			box-shadow: 0 0 10px 10px ${colors.teritariry};
		}

		img {
			width: 100%;
			object-fit: cover;
			height: 100%;
			display: block;
		}
	}
`;
