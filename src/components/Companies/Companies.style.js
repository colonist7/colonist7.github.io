import styled from 'styled-components';
import { ParallaxBase } from '../Parallax/Parallax.style';

export const CompaniesBase = styled.div`
	height: 1200px;

	h1 {
		text-align: center;
	}

	/* .background {
		height: 1200px;
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		z-index: -1; */

	${ParallaxBase} {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		border: 1px solid white;
		box-shadow: 0 0 10px 10px green;
		position: absolute;
		transition: 0.3s;
		z-index: 10;
	}

	${ParallaxBase}:first-child {
		left: 60px;
	}

	${ParallaxBase}:nth-child(2) {
		right: 90px;
	}

	${ParallaxBase}:nth-child(3) {
		left: 90px;
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
		color: #fff;
		text-align: right;
		width: 50%;
		height: 100%;
		background: #000006;
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
		color: #fff;
		text-align: left;
		width: 50%;
		height: 100%;
		background: #000006;
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
			box-shadow: 0 0 10px 10px green;
		}

		img {
			width: 100%;
			object-fit: cover;
			height: 100%;
			display: block;
		}
	}
`;
