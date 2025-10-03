const testimonials = [
	{
		name: 'Ananya Sharma',
		band: '8.0 Overall',
		text: 'The mock tests felt exactly like the real exam. I walked in confident!'
	},
	{
		name: 'Rahul Verma',
		band: '7.5 Overall',
		text: 'Speaking labs and quick feedback improved my fluency in just 3 weeks.'
	},
	{
		name: 'Meera Iyer',
		band: '8.5 Overall',
		text: 'AI band estimator helped me focus on weak areas. Super helpful insights.'
	},
];

export function Testimonials() {
	return (
		<section className="testimonials" id="testimonials">
			<div className="container">
				<h2 className="section-title">Student Stories</h2>
				<div className="testimonial-grid">
					{testimonials.map((t) => (
						<figure className="testimonial-card" key={t.name}>
							<blockquote>“{t.text}”</blockquote>
							<figcaption>
								<div className="avatar" aria-hidden>👩‍🎓</div>
								<div>
									<div className="name">{t.name}</div>
									<div className="band">{t.band}</div>
								</div>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}



