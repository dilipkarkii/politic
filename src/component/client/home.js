import React, { useEffect, useState } from "react";
import Navbartop from "./navbar";

const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);
	console.log("data", data);
	return (
		<>
			<div className="bg-slate-200">
				<Navbartop />
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto ">
					{/* gallary class */}
					<div className="flex justify-between ">
						<button
							text="Round Button"
							type="button"
							buttonStyle="rounded"
							className="px-4 py-2 font-bold text-black rounded bg-slate-400 hover:bg-slate-600"
						>
							Gallary
						</button>
						<button
							text="Outline Button"
							type="button"
							buttonStyle="outline"
							className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
						>
							Show More
						</button>
					</div>
					<div className="grid grid-cols-4 gap-4 mt-3">
						{data.slice(0, 4).map((datas) => (
							<div className="">
								<div className="relative max-w-xs bg-no-repeat bg-cover">
									<img
										src={datas.url}
										alt="Louvre"
										className="block object-cover object-center w-full h-full rounded-lg"
									/>
									<p className="absolute top-0 bottom-0 left-0 right-0 block w-full h-full px-5 pt-20 text-sm font-semibold text-center text-gray-900 transition duration-300 ease-in-out bg-fixed border-solid rounded-lg opacity-0 hover:opacity-100 border-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
										{datas.title}
									</p>
								</div>
							</div>
						))}
					</div>
					{/* gallary end */}

					{/* posts start */}
					<div className="flex justify-between mt-5 ">
						<button
							text="Round Button"
							type="button"
							buttonStyle="rounded"
							className="px-4 py-2 font-bold text-black rounded bg-slate-400 hover:bg-slate-600"
						>
							Posts
						</button>
						<button
							text="Outline Button"
							type="button"
							buttonStyle="outline"
							className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
						>
							Show More
						</button>
					</div>
					<div className="grid grid-cols-4 gap-4 mt-3">
						<div className="max-w-sm border border-gray-100 rounded-lg shadow-md bg-red-50 dark:bg-red-50 dark:border-gray-700">
							<a href="#">
								<img
									className="w-full h-32 rounded-t-lg"
									src="https://picsum.photos/200"
									alt=""
								/>
							</a>
							<div className="p-5">
								<a href="#">
									<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
										Noteworthy technology acquisitions 2021
									</h5>
								</a>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
									Here are the biggest enterprise technology acquisitions of
									2021 so far, in reverse chronological order.
								</p>
								<a
									href="#"
									className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Read more
									<svg
										className="w-4 h-4 ml-2 -mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					{/* post ends */}
				</div>
			</div>
		</>
	);
};

export default Home;
