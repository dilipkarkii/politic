import React from "react";
import { Link } from "react-router-dom";

const Dashnav = () => {
	return (
		<>
			<nav className="fixed inset-x-0 z-50 bg-gray-300">
				<div className="max-w-6xl px-4 mx-auto">
					<div className="flex justify-between">
						<div className="flex space-x-4">
							<div>
								<Link to="/dashboard">
									<p className="flex items-center px-2 py-5 text-gray-500 hover:text-gray-900">
										<i className="mb-1 mr-1 text-xl text-blue-400 bx bxl-medium-old"></i>
										<span className="font-bold">DashBoard</span>
									</p>
								</Link>
							</div>
							{/* /<!-- primary nav --> */}
							<div className="items-center hidden space-x-1 cursor-pointer md:flex">
								<Link to="/dashpost">
									<p className="px-3 py-5 text-gray-700 hover:text-gray-900">
										Post
									</p>
								</Link>
								<Link to="/dashevent">
									<p className="px-3 py-5 text-gray-700 hover:text-gray-900">
										Events
									</p>
								</Link>
								<Link to="/dashprofile">
									<p className="px-3 py-5 text-gray-700 hover:text-gray-900">
										Profile
									</p>
								</Link>
								<Link to="/dashgallary">
									<p className="px-3 py-5 text-gray-700 hover:text-gray-900">
										Gallary
									</p>
								</Link>
								<Link to="/dashplan">
									<p className="px-3 py-5 text-gray-700 hover:text-gray-900">
										plans
									</p>
								</Link>
								<Link to="/dashpersonal">
									<p className="px-3 py-5 text-gray-700 hover:text-gray-900">
										Personal Profile
									</p>
								</Link>
								<p className="px-3 py-5 text-gray-700 hover:text-gray-900">
									FeedBack
								</p>
							</div>
						</div>
						{/* <!-- secondary nav --> */}

						{/* <!-- mobile button goes here --> */}
						<div className="flex items-center sm:hidden">
							<button className="mobile-menu-button focus:outline-none">
								<i className="mt-1 text-3xl bx bx-menu"></i>
							</button>
						</div>
					</div>
				</div>
				{/* <!-- mobile menu --> */}
				<div className="hidden mobile-menu md:hidden">
					<p className="block px-4 py-2 text-sm hover:bg-gray-200">Home</p>
					<p className="block px-4 py-2 text-sm hover:bg-gray-200">Contact</p>
					<p className="block px-4 py-2 text-sm hover:bg-gray-200">Pricing</p>
					<p className="block px-4 py-2 text-sm hover:bg-gray-200">Features</p>
				</div>
			</nav>
		</>
	);
};

export default Dashnav;
