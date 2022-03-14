import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import profile from '../../assets/images/profile.jpg';
import { Parallax } from '../Parallax/Parallax';
import { AboutBase } from './About.style';

export const About = () => {
	return (
		<AboutBase>
			<Parallax startTop={100} />
			<Parallax startTop={700} />
			<Parallax startTop={1200} />
			<Container>
				<Row>
					<Col lg={12}>
						<div className='image-wrapper'>
							<Image src={profile} />
						</div>
						<h3>David Sergeev</h3>
						<p>Front-end Developer</p>
						<br />
						<br />
						<p>
							Hello, Recruiter. My name is David and I am from <strong>Tbilisi, Georgia</strong>.<br />{' '}
							What can I say about myself ? I am a funny guy, who loves metal🤘😂
							<br />
							<br />
							Well, now seriously... I am a front-end developer with more then 3 years of experience. last
							two years I was working in a german E-commerce company "Moodia softwate and solutions",
							developing online shops with a common core and a specific features, building and improving
							CMS systems for shop administrators. Also I was working as a markup developer for one year.
							<br />
							<br />
							<h4>Tech Stack</h4>
							<p>
								<strong>Programming languages and Frameworks:</strong> JavaScript, ReactJS (Hooks,
								Redux), AngularJS (also experienced in PHP, Java, .NET, VueJS, MySQL, msSQL )
							</p>
							<p>
								<strong>Bundling:</strong> Webpack, Gulp (Low experience in both, but might be improved
								soon, if needed)
							</p>
							<p>
								<strong>Markup:</strong> HTML, CSS, SCSS / SASS, Bootstrap, MaterialUI, Styled
								Components
							</p>
							<p>
								<strong>Tools:</strong> Git, Jira, Trello, Swagger, Postman, Google😂
							</p>
							<p>
								<strong>Usefull skills:</strong> OOP, Functional Programming, Responsive Design, Agile
							</p>
							<br />
							<br />
							<h4>Personal skills</h4>
							<p>
								<span>Motivated</span>
								<br />
								<span> Ambitious (very)</span>
								<br />
								<span> Hardworking</span>
								<br />
								<span> Responsable</span>
								<br />
								<span> Teamworker</span>
								<br />
								<span> Details oriented</span>
								<br />
								<span>Friendly and with good taste in music😂</span>
							</p>
							<br />
							<br />
							<h4>Education</h4>
							<p>
								<a href='#' target='_blank'>
									Caucasus University
								</a>{' '}
								Bachelor's degree in Computer engineering and science
							</p>
							<br />
							<br />
							<h4>Languages</h4>
							<p>English (C1)</p>
							<p>Russian (native)</p>
							<p>Georgian (native)</p>
							<p>German (A1)</p>
							<br />
							<br />
							<h4>Hobbies</h4>
							<p>Playing / Listenning Music</p>
							<p>Hiking</p>
							<p>Video Games</p>
							<p>Books and Movies</p>
						</p>
					</Col>
				</Row>
			</Container>
		</AboutBase>
	);
};
