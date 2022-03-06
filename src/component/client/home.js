import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbartop from "./navbar";

const Home = () => {
	const [gallarydata, setGallaryData] = useState([]);
	const [postData, setPostData] = useState();
	const userId = localStorage.getItem("userId");

		useEffect(() => {
			const fetchData = async () => {
				const { data } = await axios.get(
					`http://44.199.61.81/politician/${userId}/`
				);
				setGallaryData(data.gallery_set);
			};
			fetchData();
		}, []);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://44.199.61.81/politician/${userId}/`
			);
			console.log("data", data.post_set);
			setPostData(data.post_set);
		};
		fetchData();
	}, []);
	console.log("data", gallarydata);
	return (
		<>
			<div className="bg-slate-200">
				<Navbartop />
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto ">
					{/* gallary class */}
					<div className="flex justify-between ">
						<h1 className="text-bold text-2xl text-teal-700">Gallary</h1>

						<button
							text="Outline Button"
							type="button"
							buttonStyle="outline"
							className="px-2 py-1 font-semibold  text-teal-700 bg-transparent border border-blue-00 rounded hover:bg-slate-500 hover:text-white hover:border-transparent"
						>
							Show More...
						</button>
					</div>
					<div className="grid grid-cols-4 gap-6 mt-3">
						{gallarydata.slice(0, 4).map((datas) => (
							<div className="">
								<div className="relative max-w-xs bg-no-repeat bg-cover">
									<img
										src={`http://44.199.61.81/${datas.image.split("8000/")[1]}`}
										alt="Louvre"
										className="block object-cover object-center w-full h-full rounded-lg"
									/>
									<p className="absolute top-0 bottom-0 left-0 right-0 block w-full h-full px-5 pt-20 text-sm font-semibold text-center text-gray-900 transition duration-300 ease-in-out bg-fixed border-solid rounded-lg opacity-0 hover:opacity-100 border-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
										{datas.description}
									</p>
								</div>
							</div>
						))}
					</div>
					{/* gallary end */}

					{/* posts start */}

					<div className="flex justify-between mt-10 ">
						<h1 className="text-bold text-2xl text-teal-700">Posts</h1>
						<button
							text="Outline Button"
							type="button"
							buttonStyle="outline"
							className="px-2 py-1 font-semibold text-teal-700 bg-transparent border border-blue-00 rounded hover:bg-slate-500 hover:text-white hover:border-transparent"
						>
							Show More...
						</button>
					</div>

					<div className="grid grid-cols-4 gap-6 mt-3">
						{postData &&
							postData.map((data) => (
								<div className="max-w-sm border border-gray-100 rounded-lg shadow-md bg-red-50 dark:bg-red-50 dark:border-gray-700">
									<img
										className="w-full h-32 rounded-t-lg"
										src="https://picsum.photos/200"
										alt=""
									/>

									<div className="p-5">
										<Link to={`/detail/${data.id}`}>
											<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
												{data.title}
											</h5>
										</Link>
										<p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
											{data.description.slice(0, 90)}
										</p>

										<Link
											to={`/detail/${data.id}`}
											className="inline-flex items-center px-3 py-2 text-sm
												font-medium text-center text-white bg-blue-700
												rounded-lg hover:bg-blue-800 focus:ring-4
												focus:ring-blue-300 dark:bg-blue-600
												dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
										</Link>
									</div>
								</div>
							))}
					</div>
					{/* post ends */}
				</div>
			</div>
		</>
	);
};

export default Home;
