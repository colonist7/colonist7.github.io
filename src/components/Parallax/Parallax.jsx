import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { ParallaxBase } from './Parallax.style';

export const Parallax = ({ startTop }) => {
	const ref = useRef(null);
	const [top, setTop] = useState(startTop);
	// const [scale, setScale] = useState(1);

	window.addEventListener('scroll', (e) => {
		if (ref.current) {
			if (window.pageYOffset > startTop - 700) {
				setTop(startTop + (window.pageYOffset - startTop) / 5);
				// setScale(1 - (window.pageYOffset - startTop) / 1000);
			}
		}
	});

	return <ParallaxBase ref={ref} style={{ top: top + 'px' }} />;
};
