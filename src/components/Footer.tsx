import React from 'react';

export function Footer() {
	return (
		<footer className="footer" id="contact">
			<div className="container footer-grid">
				<div>
					<div className="logo brand">
						<img src="/logo.svg" alt="Advait IELTS logo" className="brand-mark" />
						<span className="brand-text">Advait IELTS</span>
					</div>
					<p className="muted">© {new Date().getFullYear()} Advait Institute. All rights reserved.</p>
				</div>
				<nav>
					<a href="#features">Features</a>
					<a href="#testimonials">Testimonials</a>
					<a href="#enroll">Enroll</a>
				</nav>
				<address>
					<strong>Contact</strong>
					<p>Email: hello@advaitielts.com</p>
					<p>Phone: +91 98765 43210</p>
				</address>
			</div>
		</footer>
	);
}



