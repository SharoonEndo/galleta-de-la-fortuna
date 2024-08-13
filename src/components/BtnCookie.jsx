const BtnCookie = ({ setShowCookie, setAnimate }) => {
	const changeCookie = () => {
		setAnimate(true);
		setTimeout(() => setAnimate(false), 1000);
		setTimeout(() => setShowCookie(false), 1000);
	};
	return (
		<button
			className="hover:scale-125 transition-transform cursor-pointer ml-auto block bg-indigo-700 py-2 px-4 rounded-xl text-white"
			onClick={changeCookie}
		>
			Abrir Galleta
		</button>
	);
};

export default BtnCookie;
