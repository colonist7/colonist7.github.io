import styled from 'styled-components';
import { ParallaxBase } from '../Parallax/Parallax.style';

export const AboutBase = styled.div`
	text-align: center;
	padding-bottom: 100px;

	${ParallaxBase} {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		border: 1px solid white;
		box-shadow: 0 0 10px 10px green;
		position: absolute;
		transition: 0.3s;
		z-index: -1;
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

	.image-wrapper {
		width: 250px;
		height: 250px;
		margin: 50px auto;
		position: relative;
		border: 1px solid white;
		transition: all 0.3s ease-in-out;
		border-radius: 50%;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;
