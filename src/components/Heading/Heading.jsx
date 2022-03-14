import React from 'react';
import { HeadingBase } from './Heading.style';

export const Heading = ({ text }) => {
	const splitText = (txt) => {
		return txt.split('');
	};

	return (
		<HeadingBase>
			<h1 className='heading'>
				{splitText(text).map((x, i) => (
					<span key={i}>{x}</span>
				))}
				<span className='heading2'>
					{splitText(text).map((x, i) => (
						<span key={i}>{x}</span>
					))}
				</span>
			</h1>
		</HeadingBase>
	);
};
