import React from 'react';
import { About } from '../About/About';
import { Companies } from '../Companies/Companies';
import { Contact } from '../Contact/Contact';
import { Home } from '../Home/Home';
import { Projects } from '../Projects/Projects';

export const routes = {
	About: {
		path: '/About',
		main: <About />,
	},
	Companies: {
		path: '/Companies',
		main: <Companies />,
	},
	Projects: {
		path: '/Projects',
		main: <Projects />,
	},
	Contact: {
		path: '/Contact',
		main: <Contact />,
	},
	Home: {
		path: '/',
		main: <Home />,
	},
};

export const useRoutes = () => {
	let links = { ...routes };

	Object.keys(links).map((x) => {
		links[x] = links[x].path;
		return x;
	});
	return links;
};
