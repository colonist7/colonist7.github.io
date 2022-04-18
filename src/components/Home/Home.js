import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrickBreaker } from '../../Games/BrickBreaker';
import { Heading } from '../Heading/Heading';
import { HomeBase, Screen } from './Home.style';

export const Home = () => {
	return (
		<HomeBase>
			<Container>
				<Row>
					<Col lg={12}>
						<Heading text={'hello'} />
						<BrickBreaker />
					</Col>
				</Row>
				<Screen>
					<div className='loader'></div>
				</Screen>
			</Container>
		</HomeBase>
	);
};
