import React, { useState } from 'react';

export function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="navbar">
			<div className="container nav-inner">
				<div className="logo brand">
					<img src="/logo.svg" alt="Advait IELTS logo" className="brand-mark" />
					<span className="brand-text">Advait IELTS</span>
				</div>
				<nav className={`nav-links ${open ? 'open' : ''}`}>
					<a href="#features" onClick={() => setOpen(false)}>Features</a>
					<a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
					<a href="#contact" onClick={() => setOpen(false)}>Contact</a>
					<a className="btn btn-primary btn-sm" href="#enroll" onClick={() => setOpen(false)}>Enroll</a>
				</nav>
				<button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
			</div>
		</header>
	);
}


