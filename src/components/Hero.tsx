;

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
				<div className="hero-image" role="img" aria-label="Students preparing for IELTS">
					<div className="hero-image-content">
						<div className="hero-stats">
							<div className="stat-item">
								<div className="stat-number">8.5+</div>
								<div className="stat-label">Average Band Score</div>
							</div>
							<div className="stat-item">
								<div className="stat-number">500+</div>
								<div className="stat-label">Students Trained</div>
							</div>
						</div>
						<div className="hero-features">
							<div className="feature-item">
								<span className="feature-icon">📚</span>
								<span>Comprehensive Study Material</span>
							</div>
							<div className="feature-item">
								<span className="feature-icon">🎯</span>
								<span>Targeted Practice Tests</span>
							</div>
							<div className="feature-item">
								<span className="feature-icon">🤖</span>
								<span>AI-Powered Analytics</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}



