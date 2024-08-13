const Cookie = ({ animate }) => {
	return (
		<div className="py-7 px-14 flex gap-1">
			<div className={animate ? 'translate-to-left' : ''}>Galleta de</div>
			<div className={animate ? 'translate-to-right' : ''}>la Fortuna</div>
		</div>
	);
};

export default Cookie;
