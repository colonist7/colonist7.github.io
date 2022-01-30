import React, { useEffect, useState } from 'react';
import MainRouter from '../Router/Router';
import GlobalStyle, { AppBase, Curtains } from './App.style';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [curtainsOpened, setCurtainsOpened] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setCurtainsOpened(true);
		}, 2900);
	}, []);

	return (
		<>
			<GlobalStyle></GlobalStyle>
			<AppBase>
				{!curtainsOpened && (
					<Curtains>
						<div className='shadow circle'>
							<div className='s-1'></div>
							<div className='s-2'></div>
							<div className='s-3'></div>
							<div className='s-4'></div>
							<div className='s-5'></div>
							<div className='s-6'></div>
							<div className='s-7'></div>
							<div className='s-8'></div>
							<div className='s-9'></div>
						</div>
						<div className='loading'> Loading... </div>
					</Curtains>
				)}
				<MainRouter></MainRouter>
			</AppBase>
		</>
	);
};

export default App;
