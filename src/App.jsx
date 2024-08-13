import { useState } from 'react';
import './App.css';
import quotes from './data/phrases.json';
import getRandomNumbers from './utils/getRandomNumbers';
import Phrase from './components/Phrase';
import BtnPhrase from './components/BtnPhrase';
import photos from './data/photos.json';
import Cookie from './components/Cookie';
import BtnCookie from './components/BtnCookie';

function App() {
	const indexRandom = getRandomNumbers(quotes.length);
	const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
	const [bgSelected, setBgSelected] = useState(
		photos[getRandomNumbers(photos.length)],
	);

	const [showCookie, setShowCookie] = useState(true);
	const [animate, setAnimate] = useState(false);

	const objStyles = {
		backgroundImage: `url(/images/fondo${bgSelected}.jpg)`,
	};

	return (
		<div
			style={objStyles}
			className="min-h-screen bg-cover bg-center flex justify-center items-center px-4"
		>
			<h1 className="absolute top-20 text-5xl uppercase font-black text-center drop-shadow-lg stroke text-blue">
				Galleta de la Fortuna
			</h1>
			<article className="max-w-[400px] bg-white p-6 rounded-xl shadow-2xl">
				{showCookie ? (
					<Cookie showCookie={showCookie} animate={animate} />
				) : (
					<Phrase phraseSelected={phraseSelected} />
				)}
				{showCookie ? (
					<BtnCookie setShowCookie={setShowCookie} setAnimate={setAnimate} />
				) : (
					<BtnPhrase
						setPhraseSelected={setPhraseSelected}
						setBgSelected={setBgSelected}
						setShowCookie={setShowCookie}
					/>
				)}
			</article>
			<footer className="absolute bottom-20 bg-indigo-950/75 p-5 rounded-lg text-white ">
				<p>{phraseSelected.author}</p>
			</footer>
		</div>
	);
}

export default App;
