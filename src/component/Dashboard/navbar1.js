import React from "react";
import Example from "../../headless";
import { Link, useNavigate } from "react-router-dom";

const Navbar1 = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("userId");
		navigate("/");
	};
	return (
		<>
			<nav class="bg-[#14B8A6] border-[#14B8A6] px-2 sm:px-4 py-2.5 rounded ">
				<div class="container flex flex-wrap justify-between items-center max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
					<a href="/dashboard" class="flex items-center text-white font-bold">
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Politician
						</span>
					</a>
					<div class="flex items-center md:order-2">
						<button
							id="dropdownDefault"
							data-dropdown-toggle="dropdown"
							class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							type="button"
						>
							Setting
							<svg
								class="ml-2 w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								></path>
							</svg>
						</button>
						{/* <!-- Dropdown menu --> */}
						<div
							id="dropdown"
							class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdownDefault"
							>
								<li>
									<Link
										to="/reset"
										class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Reset Password
									</Link>
								</li>
								<li>
									<button
										onClick={handleLogout}
										class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Sign out
									</button>
								</li>
							</ul>
						</div>
						<button
							data-collapse-toggle="mobile-menu-2"
							type="button"
							class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="mobile-menu-2"
							aria-expanded="false"
						>
							<span class="sr-only">Open main menu</span>
							<svg
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"
								></path>
							</svg>
							<svg
								class="hidden w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar1;
