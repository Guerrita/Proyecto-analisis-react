import React from 'react';
import Navbar from '../components/Navbar';
import "@styles/Layout.css"

const Layout = ({ children }) => {
	return (
		<div className="Layout">
		<Navbar/>
		<main>
			{children}
		</main>
			
		</div>
	);
}

export default Layout;
