import React from "react";
import { Link } from "react-router-dom";

const Navbartop = () => {
	return (
		<>
			<nav class="bg-gray-100 fixed inset-x-0 z-50">
				<div class="max-w-6xl mx-auto px-4">
					<div class="flex justify-between">
						<div class="flex space-x-4">
							{/* <!-- logo --> */}
							<div>
								<Link to="/">
									<p class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
										<i class="bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400"></i>
										<span class="font-bold">POLITICIAN</span>
									</p>
								</Link>
							</div>
							{/* /<!-- primary nav --> */}
							<div class="hidden md:flex items-center space-x-1 cursor-pointer">
								<Link to="/home">
									<p class="py-5 px-3 text-gray-700 hover:text-gray-900">
										Home
									</p>
								</Link>
								<Link to="/post">
									<p class="py-5 px-3 text-gray-700 hover:text-gray-900">
										Post
									</p>
								</Link>
								<Link to="/event">
									<p class="py-5 px-3 text-gray-700 hover:text-gray-900">
										Events
									</p>
								</Link>
								<Link to="/profile">
									<p class="py-5 px-3 text-gray-700 hover:text-gray-900">
										Profile
									</p>
								</Link>
								<Link to="/gallary">
									<p class="py-5 px-3 text-gray-700 hover:text-gray-900">
										Gallary
									</p>
								</Link>
								<Link to="/plans">
									<p class="py-5 px-3 text-gray-700 hover:text-gray-900">
										plans
									</p>
								</Link>
								<Link to="/personal">
									<p class="py-5 px-3 text-gray-700 hover:text-gray-900">
										Personal Profile
									</p>
								</Link>
								<p class="py-5 px-3 text-gray-700 hover:text-gray-900">
									FeedBack
								</p>
							</div>
						</div>
						{/* <!-- secondary nav --> */}
						<div class="hidden md:flex items-center space-x-1">
							<p href="" class="py-5 px-3">
								Login
							</p>
							<p
								href=""
								class="py-2 px-3 bg-yellow-400 text-white hover:bg-yellow-300 text-sm hover:text-yellow-800 rounded transition duration-300"
							>
								Signup
							</p>
						</div>
						{/* <!-- mobile button goes here --> */}
						<div class="md:hidden flex items-center">
							<button class="mobile-menu-button focus:outline-none">
								<i class="bx bx-menu text-3xl mt-1"></i>
							</button>
						</div>
					</div>
				</div>
				{/* <!-- mobile menu --> */}
				<div class="mobile-menu hidden md:hidden">
					<p class="block py-2 px-4 text-sm hover:bg-gray-200">Home</p>
					<p class="block py-2 px-4 text-sm hover:bg-gray-200">Contact</p>
					<p class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</p>
					<p class="block py-2 px-4 text-sm hover:bg-gray-200">Features</p>
				</div>
			</nav>
		</>
	);
};

export default Navbartop;
