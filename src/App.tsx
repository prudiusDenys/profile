import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {ThemeProvider} from '@material-ui/core';
import {theme} from "./common/styles/theme";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Profile/>
			</ThemeProvider>
		</div>
	);
}

export default App;
