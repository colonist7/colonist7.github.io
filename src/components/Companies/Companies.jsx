import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { ButtonPrimary } from '../../assets/styles/Button';
import { Parallax } from '../Parallax/Parallax';
import { CompaniesBase, CompanyCardBase } from './Companies.style';
import leavingstone from '../../assets/images/leavingstone.jpg';
import moodia from '../../assets/images/moodia.jpg';
import weber from '../../assets/images/weber.png';
import hobbystudio from '../../assets/images/hobbystudio.png';
import { Heading } from '../Heading/Heading';

const cards = [
	{
		title: 'Moodia Software and Solutions',
		image: moodia,
		description: `We develop individual software solutions and interfaces to optimize the work process for you and your team.`,
		period: 'September 2021 - Current',
		position: 'Lead Front-end Developer',
		technologies: 'React JS | TypeScript | Angular JS | SCSS | HTML',
		left: 'MOO',
		right: 'DIA',
	},
	{
		title: 'Leavingstone',
		image: leavingstone,
		description: `LEAVINGSTONE 
		DIGITAL CREATIVE AGENCY 
		SINCE 2010
		
		
		
		We believe in the limitless potential of human mind 
		
		 
		
		We help businesses to grow through a combination of creative thinking and tech innovations 
		
		 
		
		We are in constant search of WOW
		
		
		
		SOME OF OUR CLIENTS ARE:
		 
		
		Siemens, Visa, Fox, Netflix, Zeiss Group, World Health Organisation, Game Solutions Lab, Spar, Zoommer, Natakhtari Brewery, TBC Bank, Liberty Bank, Galleria Tbilisi, Gurieli Tea, Borjomi, Tbilisi Gardens, Lenovo…  
	 `,
		period: 'June 2021 - September 2021',
		position: 'Middle Front-End Developer',
		technologies: 'React JS | SCSS | Vue JS | JS',
		left: 'LEAVIN',
		right: 'GSTONE',
	},
	{
		title: 'Weber Informatics',
		description: `We are a fast growing software development company. Our clients are 100% from the German speaking part of Europe (Germany, Austria and Swiss). Our goal is it to provide high quality software.`,
		image: weber,
		period: 'October 2010 - June 2021',
		position: 'Junior / Middle Front-End Developer',
		technologies: 'Angular JS | React JS | SCSS | HTML',
		left: 'WEBER IN',
		right: 'FORMATICS',
	},
	{
		title: 'HobbyStudio',
		image: hobbystudio,
		description: `Digital Agency HobbyStudio based in Tbilisi, Georgia, was founded in 2010.
		Our team has created a lot of interesting web projects, photos and designs for local and foreign companies.
		Our clients are large and small companies, hotels, manufacturers, restaurants, online shops and many others. Our experienced professionals bring to life best individual solutions for each of theme.`,

		period: 'December 2018 - October 2019',
		position: 'Markup Developer',
		technologies: 'HTML | CSS | SCSS | JQuery | PHP',
		left: 'HOBBY',
		right: 'STUDIO',
	},
];

export const Companies = () => {
	return (
		<CompaniesBase>
			{/* <div className='background'> */}
			<Parallax startTop={100} />
			<Parallax startTop={700} />
			<Parallax startTop={1200} />
			<Parallax startTop={1800} />
			<Parallax startTop={2300} />
			{/* </div> */}
			<Container>
				<Row>
					<Heading text='COMPANIES' />
					{cards.map((x, i) => {
						return <CompanyCard card={x} />;
					})}
				</Row>
			</Container>
		</CompaniesBase>
	);
};

export const CompanyCard = ({ card }) => {
	return (
		<CompanyCardBase contentLeft={card.left} contentRight={card.right}>
			<Row>
				<Col lg={3}></Col>

				<Col lg={6}>
					<Row className='d-flex align-items-center'>
						<Col lg={12}>
							<div className='image-wrapper'>
								<Image src={card.image} />
							</div>
						</Col>
						<Col lg={12}>
							<div>
								<div>
									<h3>{card.title}</h3>
									<h6>{card.period}</h6>
								</div>
								<p className='mb-3'>
									<strong>{card.position}</strong>
								</p>
								<p>{card.description}</p>
								<div className='mt-3 mb-4'>
									<strong>Technologies:</strong> <span>{card.technologies}</span>
								</div>
								<ButtonPrimary style={{ margin: 'auto' }}>See More</ButtonPrimary>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</CompanyCardBase>
	);
};
