import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Parallax } from '../Parallax/Parallax';
import { ButtonPrimary } from '../../assets/styles/Button';
import { ProjectsBase } from './Projects.style';
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
		img: 'data:image/png;base64,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',
		desc: "FIDULA: school musicals, elementary music theatre, children's musicals, voice training, lively children's choir, jazz canons, class music, school theatre, ...",
	},
	{
		title: 'AMP Rollwin',
		class: 'white',
		url: 'https://www.rollaeden-shop.de/',
		img: 'https://www.rollaeden-shop.de/templates/primarkets/themes/default/assets/images/new_logo.png',
		desc: 'In Rolladen-Shop.de you get over 150 components for the construction and renovation of your roller shutter. We carry mechanical drives (belt winders) as well as ...',
	},
	{
		title: 'Balance Werebemittel',
		class: 'white small',
		url: 'https://www.balance-werbemittel.de/',
		img: 'https://www.balance-werbemittel.de/wp-content/images/Logo-Balance-2_Pantone.png',
		desc: 'Find your individual promotional item now from over 50,000 items available at short notice - at top prices at any time. Individual promotional items.',
	},
	{
		class: 'white',
		title: 'Mrcheveli',
		url: 'http://mrcheveli.com.ge',
		img: 'http://mrcheveli.com.ge/images/logo.svg',
		desc: '"Financial Advisor" is an educational social project, which aims to raise the level of financial education in Georgia, in different target groups, taking into account their geographical, social, age, gender, professional or other characteristics. The differences between these groups, in themselves, require the use of differentiated approaches.',
	},
	{
		title: 'Nikora',
		class: 'invert white small',
		url: 'http://new.nikorasupermarket.ge/',
		img: 'data:image/png;base64,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',
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
		img: 'https://dio.ge/modules/vacancy/uploads/logo.jpg',
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
			<Container>
				<Row>
					<Col lg={12}>
						<Heading text={'PROJECTS'} />
					</Col>
				</Row>
				<Row>
					{projectsArray.map((item) => (
						<Col lg={12} className={`projects-block ${item.class}`}>
							<a href={item.url} className='block-inner'>
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
