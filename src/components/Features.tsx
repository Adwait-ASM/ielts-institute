const featureItems = [
	{
		title: 'Speaking Practice Labs',
		desc: 'Daily live sessions with certified trainers and instant fluency feedback.',
		icon: '🗣️',
	},
	{
		title: 'Full-Length Mock Tests',
		desc: 'Real exam interface with detailed timing and section-wise analysis.',
		icon: '📝',
	},
	{
		title: 'AI Band Score Estimator',
		desc: 'Upload writing/speaking samples and get an AI-predicted band score.',
		icon: '🤖',
	},
	{
		title: 'Personal Study Planner',
		desc: 'Custom weekly schedules and reminders built around your availability.',
		icon: '📅',
	},
];

export function Features() {
	return (
		<section className="features" id="features">
			<div className="container">
				<h2 className="section-title">What You Get</h2>
				<div className="feature-grid">
					{featureItems.map((f) => (
						<div className="feature-card" key={f.title}>
							<div className="feature-icon" aria-hidden>
								{f.icon}
							</div>
							<h3>{f.title}</h3>
							<p>{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}



