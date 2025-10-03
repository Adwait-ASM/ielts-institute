import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import './style.css';

export default function App() {
	return (
		<div className="app">
			<Navbar />
			<Hero />
			<Features />
			<Testimonials />
			<Footer />
		</div>
	);
}



