import styled from 'styled-components';
import { colors } from '../../assets/templateVars';

export const HeaderBase = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		text-decoration: none;
		font-size: 1rem;
		margin: 0 15px;
		color: ${colors.primary};
		font-weight: bold;
		text-transform: uppercase;
		transition: all 0.3s ease-in-out;

		&:hover {
			color: ${colors.secondary};
		}
	}
`;
