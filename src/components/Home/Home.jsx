import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ButtonPrimary } from '../../assets/styles/Button';
import { Heading } from '../Heading/Heading';
import { HomeBase, Screen } from './Home.style';

export const Home = () => {
	const [time, setTime] = useState(0);
	const [pointerX, setPointerX] = useState(0);
	const [pointerY, setPointerY] = useState(0);
	const [started, setStarted] = useState(false);

	document.onmousemove = function (event) {
		setPointerX(event.pageX);
		setPointerY(event.pageY);
	};

	useEffect(() => {
		if (time <= 4 && started) {
			const interval = setInterval(() => {
				setTime((time) => {
					return time + 1;
				});
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [time, started]);

	return (
		<HomeBase>
			<Container>
				<Row>
					<Col lg={12}>
						<Heading text={'hello'} />
						{/* <BrickBreaker /> */}
					</Col>
				</Row>
				<Screen x={pointerX} y={pointerY}>
					{started ? (
						<>
							<div className={time > 4 ? 'faded-out' : ''}>
								<div className='loader'></div>
								<div className='loader'></div>
								<div className='loader'></div>
							</div>
							<div className={`${time > 4 ? 'faded-in' : 'faded-out'} smile`}>
								<div className='eye left'>
									<div className='guga'></div>
								</div>
								<div className='eye right'>
									<div className='guga'></div>
								</div>
								<div className='mouth'></div>
								<div className='lip'></div>
							</div>
						</>
					) : (
						<ButtonPrimary
							className='start'
							onClick={() => {
								setStarted(true);
							}}>
							START
						</ButtonPrimary>
					)}
				</Screen>
			</Container>
		</HomeBase>
	);
};
