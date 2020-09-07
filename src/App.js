import React from 'react'
import { Route } from 'react-router-dom'

import Layout from './layout/Layout'
import './App.css'



function App() {
	return (
		<div className="App">
			<Route path="/" component={Layout} />
		</div>
	);
}

export default App;
