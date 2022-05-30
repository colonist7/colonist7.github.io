import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Parallax } from '../Parallax/Parallax';
import { ButtonPrimary } from '../../assets/styles/Button';
import { ProjectsBase } from './Projects.style';
import fidula from '../../assets/images/fidula.png';
import beton2go from '../../assets/images/beton2go.png';
import amp from '../../assets/images/amp.png';
import nikora from '../../assets/images/nikora.png';
import { Heading } from '../Heading/Heading';

const projectsArray = [
	{
		title: 'National Bank Of Georgia',
		class: 'invert',
		url: 'https://nbg.gov.ge/',
		img: 'https://upload.wikimedia.org/wikipedia/ka/8/87/Logo_of_National_Bank_of_Georgia.svg',
		desc: 'National Bank of Georgia is the central bank of Georgia. Its status is defined by the Constitution of Georgia. According to the Constitution of Georgia, it is independent of state control, and is tasked with ensuring price stability.',
	},
	{
		title: 'Fidula',
		class: 'white',
		url: 'https://www.fidula.de/',
		img: fidula,
		desc: "FIDULA: school musicals, elementary music theatre, children's musicals, voice training, lively children's choir, jazz canons, class music, school theatre, ...",
	},
	{
		title: 'Beton2Go',
		class: 'white p40',
		url: 'https://shop.baustoffe2go.com/',
		img: beton2go,
		desc: "Fresh concrete at the push of a button - Massfeller's mini concrete batching plants offer a flexible, time-saving way to procure concrete in self-service.",
	},
	{
		title: 'AMP Rollwin',
		class: 'white',
		url: 'https://www.rollaeden-shop.de/',
		img: amp,
		desc: 'In Rolladen-Shop.de you get over 150 components for the construction and renovation of your roller shutter. We carry mechanical drives (belt winders) as well as ...',
	},
	// {
	// 	title: 'Balance Werebemittel',
	// 	class: 'white small',
	// 	url: 'https://www.balance-werbemittel.de/',
	// 	img: 'https://www.balance-werbemittel.de/wp-content/images/Logo-Balance-2_Pantone.png',
	// 	desc: 'Find your individual promotional item now from over 50,000 items available at short notice - at top prices at any time. Individual promotional items.',
	// },
	{
		class: 'white',
		title: 'Mrcheveli',
		url: 'http://mrcheveli.com.ge',
		img: 'http://mrcheveli.com.ge/images/logo.svg',
		desc: '"Financial Advisor" is an educational social project, which aims to raise the level of financial education in Georgia, in different target groups, taking into account their geographical, social, age, gender, professional or other characteristics. The differences between these groups, in themselves, require the use of differentiated approaches.',
	},
	{
		title: 'Nikora',
		class: '',
		url: 'http://new.nikorasupermarket.ge/',
		img: nikora,
		desc: '"Nikora" is one of the most successful food producers on Georgian market. The company was founded in 1998, soon gained a leading position and formed as a strong holding. Business, started with the producing of two kind of sausage, turned into several enterprises, large-scale distribution network, retailing units of company’s subsidiary’s and importer companies. ',
	},
	{
		class: 'white',
		title: 'RetexLab',
		url: 'https://retexlab.com/',
		img: 'https://retexlab.com/images/logo.svg',
		desc: 'Retexlab (new business name of Xwavesoft) is a privately owned software development company, founded in 2009. The main goal is the development of productivity tools for iOS and macOS that implement widely known and most effective productivity techniques to help our customers maximize their time, avoid burnout and get rid of procrastination.',
	},
	{
		title: 'DIO',
		class: 'white',
		url: 'https://dio.ge/georgian/horizontal-blinds-calculator',
		img: 'https://hotsale.ge/files/offers/dio_jaluzebi/logo.png',
		desc: 'LTD “DIO”’s history began 25 years ago, at the year 1996. Started out with zero capital and now holds the leading position in the field in the local market.',
	},
];

export const Projects = () => {
	return (
		<ProjectsBase>
			<Parallax startTop={100} />
			<Parallax startTop={700} />
			<Parallax startTop={1200} />
			<Parallax startTop={1700} />
			<Parallax startTop={2200} />
			<Parallax startTop={2700} />
			<Parallax startTop={3200} />
			<Container>
				<Row>
					<Col lg={12}>
						<Heading text={'PROJECTS'} />
					</Col>
				</Row>
				<Row>
					{projectsArray.map((item) => (
						<Col lg={12} className={`projects-block ${item.class}`}>
							<a href={item.url} rel='noreferrer' target='_blank' className='block-inner'>
								<div className='image-wrapper'>
									<img src={item.img} alt='' />
								</div>
								<p>{item.desc}</p>
							</a>
							<div className='project-hover'>
								<h4>{item.title}</h4>
								<a href={item.url}>
									<ButtonPrimary>Go to website</ButtonPrimary>
								</a>
							</div>
						</Col>
					))}
				</Row>
				<Row>
					<Col lg={12}>
						<p className='ps'>
							P.S. That's not a full list, a lot of websites I have worked on are disabled for some
							reason. If u want to see more, you can check my{' '}
							<a href='https://github.com/colonist7'>Github</a> account
						</p>
					</Col>
				</Row>
			</Container>
		</ProjectsBase>
	);
};
