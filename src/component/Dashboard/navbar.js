import React from "react";
import Example from "../../headless";

const Navbar = () => {
	return (
		<>
			<nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
				<div className="flex items-center flex-shrink-0 mr-6 text-white">
					<svg
						className="w-8 h-8 mr-2 fill-current"
						width="54"
						height="54"
						viewBox="0 0 54 54"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
					</svg>
					<span className="text-xl font-semibold tracking-tight">
						Politician
					</span>
				</div>

				<div>
					<img
						className="flex rounded-full h-9 w-9 "
						src="https://cdn.britannica.com/70/2970-050-796F522C/Flag-Nepal.jpg"
						alt=""
					/>
				</div>

				<Example />
			</nav>
		</>
	);
};

export default Navbar;
