import React from 'react';

const About = () => {
	return <h1>About</h1>;
};

const Home = () => {
	return <h1>Home</h1>;
};

export const routes = {
	About: {
		path: '/About',
		main: <About />,
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
