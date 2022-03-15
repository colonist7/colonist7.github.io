import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading } from '../Heading/Heading';
import { colors } from '../../assets/templateVars';
import { ContactBase } from './Contact.style';

const step = 20;
const directions = {
	BOTTOM_RIGHT: 'BOTTOM_RIGHT',
	BOTTOM_LEFT: 'BOTTOM_LEFT',
	TOP_LEFT: 'TOP_LEFT',
	TOP_RIGHT: 'TOP_RIGHT',
};

const contactBlocks = [
	{
		title: 'Facebook',
		icon: faFacebook,
		link: 'https://www.facebook.com/D.Sergeev97/',
		color: 'blue',
	},
	{
		title: 'Linkedin',
		icon: faLinkedin,
		link: 'https://www.linkedin.com/in/d-sergeev/',
		color: 'lightblue',
	},
	{
		title: 'Github',
		icon: faGithub,
		link: 'https://github.com/colonist7',
		color: 'green',
	},
	{
		title: 'E-mail',
		icon: faEnvelope,
		link: 'd_sergeevi@cu.edu.ge',
		isMail: true,
		color: 'yellow',
	},
	{
		title: 'Phone ',
		icon: faPhone,
		link: '+995 599 08 99 29',
		isPhone: true,
		color: 'red',
	},
];

export const Contact = () => {
	const light = useRef(null);
	const [animate, setAnimate] = useState(true);
	const [hovered, setHovered] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [direction, setDirection] = useState(directions.BOTTOM_RIGHT);
	let intersectionCoordinates = { v: [0, window.innerHeight], h: [0, window.innerWidth] };

	// console.log(intersectionCoordinates);

	const moveToBottomRight = (h, v) => {
		setX(h + step);
		setY(v + step);
	};

	const moveToBottomLeft = (h, v) => {
		let newX = h - step;
		setX(newX);
		let newY = v + step;
		setY(newY);
	};

	const moveToTopLeft = (h, v) => {
		let newX = h - step;
		setX(newX);
		let newY = v - step;
		setY(newY);
	};

	const moveToTopRight = (h, v) => {
		let newX = h + step;
		setX(newX);
		let newY = v - step;
		setY(newY);
	};

	const trackMovement = (x, y) => {
		if (x >= intersectionCoordinates.h[1] - 30) {
			if (direction === directions.TOP_RIGHT) {
				setDirection(directions.TOP_LEFT);
			}

			if (direction === directions.BOTTOM_RIGHT) {
				setDirection(directions.BOTTOM_LEFT);
			}
		}

		if (x <= intersectionCoordinates.h[0] + 30) {
			if (direction === directions.TOP_LEFT) {
				setDirection(directions.TOP_RIGHT);
			}

			if (direction === directions.BOTTOM_LEFT) {
				setDirection(directions.BOTTOM_RIGHT);
			}
		}

		if (y >= intersectionCoordinates.v[1] - 30) {
			if (direction === directions.BOTTOM_LEFT) {
				setDirection(directions.TOP_LEFT);
			}

			if (direction === directions.BOTTOM_RIGHT) {
				setDirection(directions.TOP_RIGHT);
			}
		}

		if (y <= intersectionCoordinates.v[0] + 30) {
			if (direction === directions.TOP_LEFT) {
				setDirection(directions.BOTTOM_LEFT);
			}

			if (direction === directions.TOP_RIGHT) {
				setDirection(directions.BOTTOM_RIGHT);
			}
		}

		switch (direction) {
			case directions.BOTTOM_LEFT:
				moveToBottomLeft(x, y);
				break;
			case directions.BOTTOM_RIGHT:
				moveToBottomRight(x, y);
				break;
			case directions.TOP_LEFT:
				moveToTopLeft(x, y);
				break;
			case directions.TOP_RIGHT:
				moveToTopRight(x, y);
				break;
			default:
				moveToBottomRight(x, y);
				break;
		}
	};

	useEffect(() => {
		if (animate || !hovered) {
			setTimeout(() => {
				trackMovement(x, y);
			}, 100);
		}
	}, [x, y, hovered, animate]);

	return (
		<ContactBase>
			<Container>
				<Row>
					<Heading text={'CONTACT'} />
					<Col className='contacts'>
						<div
							ref={light}
							style={{ left: x + 'px', top: y + 'px' }}
							className={`light ${hovered && 'hovered'}`}></div>
						{contactBlocks.map((item) => (
							<div
								className='block'
								onMouseEnter={(e) => {
									setAnimate(false);
									setHovered(true);
									light.current.style.boxShadow = `0 0 80px 40px ${item.color}`;
									setX(+e.pageX);
									setY(+e.pageY);

									setTimeout(() => {
										setX(+e.pageX);
										setY(+e.pageY);
									}, 100);
								}}
								onMouseMove={(e) => {
									setX(+e.pageX);
									setY(+e.pageY);
								}}
								onMouseLeave={(e) => {
									setAnimate(true);
									setHovered(false);
									light.current.style.boxShadow = `0 0 60px 30px ` + colors.teritariry;
								}}>
								<a
									target='_blank'
									rel='noreferrer'
									href={`${item.isMail ? 'mailto:' : ''}${item.isPhone ? 'tel:' : ''}${item.link}`}>
									<FontAwesomeIcon icon={item.icon} />{' '}
								</a>
							</div>
						))}
					</Col>
				</Row>
			</Container>
		</ContactBase>
	);
};
