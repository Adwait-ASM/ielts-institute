import React from 'react';

export function Hero() {
	return (
		<section className="hero">
			<div className="container hero-grid">
				<div className="hero-text">
					<h1>Crack IELTS with Confidence</h1>
					<p>Personalized coaching, AI-powered analytics, and real exam simulations to elevate your band score.</p>
					<div className="hero-actions">
						<a href="#enroll" className="btn btn-primary">Get Started</a>
						<a href="#features" className="btn btn-outline">Explore Features</a>
					</div>
				</div>
				<div className="hero-image" role="img" aria-label="Students preparing for IELTS"></div>
			</div>
		</section>
	);
}



