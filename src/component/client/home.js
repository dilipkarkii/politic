import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { listGallary } from "../../actions/GallaryAction";
import { listPost } from "../../actions/PostAction";
import { listEvent } from "../../actions/EventAction";
import { listPersonal } from "../../actions/PersonalAction";

const Home = () => {
	const dispatch = useDispatch();
	const gallaryList = useSelector((state) => state.gallaryList);
	const { loading, gallarys } = gallaryList;
	const postList = useSelector((state) => state.postList);
	const { loading: postloading, posts } = postList;
	const eventList = useSelector((state) => state.eventList);
	const { loading: eventloading, events } = eventList;
	const personalList = useSelector((state) => state.personalList);
	const { loading: profileloading, personals } = personalList;

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	useEffect(() => {
		dispatch(listGallary(userId));
	}, [dispatch]);

	useEffect(() => {
		dispatch(listPost(userId));
	}, [dispatch]);

	useEffect(() => {
		dispatch(listEvent(userId));
	}, [dispatch]);

	useEffect(() => {
		dispatch(listPersonal(userId));
	}, [dispatch]);

	return (
		<>
			<div className="bg-slate-200">
				<Navbartop />
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto ">
					{/* biography */}
					<div className="relative w-auto max-w-3xl mx-auto ">
						<div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-[#fff] focus:outline-none">
							{/*header*/}
							<div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
								<h3 className="text-3xl font-semibold text-gray-500">
									BIOGRAPHY
								</h3>

								<div className="w-12 h-12">
									<img
										src={`http://44.199.61.81:8080/${
											personals && personals.flag.split("8000/")[1]
										}`}
										alt="party flag"
										className="w-full h-full align-middle border-none rounded-full shadow"
									/>
								</div>
							</div>
							{profileloading ? (
								<div className="w-[85px] m-auto">
									<div className="justify-center animate-spin">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-refresh-cw"
										>
											<polyline points="23 4 23 10 17 10"></polyline>
											<polyline points="1 20 1 14 7 14"></polyline>
											<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
										</svg>
									</div>
								</div>
							) : (
								<div className="relative flex-auto p-6">
									<p className="my-4 text-lg leading-relaxed text-blueGray-500">
										<div className="grid gap-4 md:grid-cols-2">
											<div
												className="md:col-span-1"
												style={{ height: "270px", width: "350px" }}
											>
												<img
													src={`http://44.199.61.81:8080/${
														personals &&
														personals.profilePhoto.split("8000/")[1]
													}`}
													alt="Louvre"
													className="block object-contain w-full h-full mr-5 rounded-lg"
													// onClick={() => setShowModal(true)}
												/>
											</div>
											<div className="ml-5 ">
												<div className="flex ">
													<p className="mr-1">
														Name: {personals && personals.firstName}
													</p>
													<p className="mr-1">
														{personals && personals.middleName === "null"
															? ""
															: personals && personals.middleName}
													</p>
													<p className="mr-1">
														{personals && personals.lastName}
													</p>
												</div>
												<p>Age: {personals && personals.age}</p>
												<p>Address: {personals && personals.address}</p>
												<p>Education: {personals && personals.education}</p>
												<p>
													Political Party:&nbsp;
													{personals && personals.politicalBackground}
												</p>
												<p>
													Election Area: {personals && personals.electionArea}
												</p>
												<p>
													Member Since: {personals && personals.memberSince}
												</p>
												<p>
													Position in Party: {personals && personals.position}
												</p>
											</div>
										</div>
									</p>
								</div>
							)}
						</div>
					</div>
					{/* biography end */}

					{/* gallary class */}
					<div className="flex justify-between mt-3 ">
						<h1 className="text-2xl text-teal-700 text-bold">Gallary</h1>

						<Link to="/gallary">
							<button
								text="Outline Button"
								type="button"
								buttonstyle="outline"
								className="px-2 py-1 font-semibold text-teal-700 bg-transparent border rounded border-blue-00 hover:bg-slate-500 hover:text-white hover:border-transparent"
							>
								Show More...
							</button>
						</Link>
					</div>

					{loading ? (
						<div className="w-[85px] m-auto">
							<div className="justify-center animate-spin">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-refresh-cw"
								>
									<polyline points="23 4 23 10 17 10"></polyline>
									<polyline points="1 20 1 14 7 14"></polyline>
									<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
								</svg>
							</div>
						</div>
					) : (
						<div className="grid grid-cols-4 gap-4 mt-5">
							{gallarys &&
								gallarys.slice(0, 4).map((images) => (
									<div className="" key={images.id}>
										<div
											className="relative max-w-xs bg-no-repeat bg-cover"
											style={{ height: "200px", width: "265px" }}
										>
											<img
												src={`http://44.199.61.81:8080/${
													images.image.split("8000/")[1]
												}`}
												alt="Louvre"
												className="block object-cover object-center w-full h-full mr-5 rounded-lg"
												// onClick={() => setShowModal(true)}
											/>
											{/* px-5 bottom-0 pt-20 text-center */}
											<div className="absolute top-0 left-0 right-0 block w-full h-full text-sm font-semibold text-gray-900 transition duration-300 ease-in-out bg-fixed border-solid rounded-lg opacity-0 hover:opacity-70 border-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
												<p className="bottom-0 px-5 pt-20 text-center">
													{images.description}
												</p>
											</div>
										</div>
									</div>
								))}
						</div>
					)}

					{/* posts start */}

					<div className="flex justify-between mt-10 ">
						<h1 className="text-2xl text-teal-700 text-bold">Posts</h1>
						<Link to="/post">
							<button
								text="Outline Button"
								type="button"
								buttonstyle="outline"
								className="px-2 py-1 font-semibold text-teal-700 bg-transparent border rounded border-blue-00 hover:bg-slate-500 hover:text-white hover:border-transparent"
							>
								Show More...
							</button>
						</Link>
					</div>
					{postloading ? (
						<div className="w-[85px] m-auto">
							<div className="justify-center animate-spin">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-refresh-cw"
								>
									<polyline points="23 4 23 10 17 10"></polyline>
									<polyline points="1 20 1 14 7 14"></polyline>
									<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
								</svg>
							</div>
						</div>
					) : (
						<div className="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
							{posts &&
								posts.slice(0, 4).map((data) => (
									<div
										key={data.id}
										className="bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
									>
										<img
											className="w-full h-32 rounded-t-lg"
											src={`http://44.199.61.81:8080/${
												data.postimage_set[0].image.split("8000/")[1]
											}`}
											alt=""
										/>

										<div className="px-4 py-4">
											<h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
												{/* {data.title.slice(0, 30)} */}
												{data.title.length > 24
													? data.title.substring(0, 21) + "..."
													: data.title}
											</h5>

											<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
												{/* {data.description.slice(0, 10)} */}
												{data.description.length > 81
													? data.description.substring(0, 80) + "..."
													: data.description}
											</p>
											<div className="flex justify-between">
												<Link to={`/detail/${data.id}`}>
													<button className="inline-flex items-start px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
														Read more
														<svg
															className="w-4 h-4 ml-2 -mr-1"
															fill="currentColor"
															viewBox="0 0 20 20"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
																clipRule="evenodd"
															></path>
														</svg>
													</button>
												</Link>
											</div>
										</div>
									</div>
								))}
						</div>
					)}
					{/* post ends */}

					{/* event start */}

					<div className="flex justify-between mt-10 ">
						<h1 className="text-2xl text-teal-700 text-bold">Event</h1>
						<Link to="/event">
							<button
								text="Outline Button"
								type="button"
								buttonstyle="outline"
								className="px-2 py-1 font-semibold text-teal-700 bg-transparent border rounded border-blue-00 hover:bg-slate-500 hover:text-white hover:border-transparent"
							>
								Show More...
							</button>
						</Link>
					</div>
					{eventloading ? (
						<div className="w-[85px] m-auto">
							<div className="justify-center animate-spin">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-refresh-cw"
								>
									<polyline points="23 4 23 10 17 10"></polyline>
									<polyline points="1 20 1 14 7 14"></polyline>
									<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
								</svg>
							</div>
						</div>
					) : (
						<div className="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
							{events &&
								events.map((data) => (
									<div
										key={data.id}
										className="bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
									>
										<img
											className="w-full h-32 rounded-t-lg"
											src={`http://44.199.61.81:8080/${
												data.image.split("8000/")[1]
											}`}
											alt=""
										/>

										<div className="px-4 py-4">
											<h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
												{/* {data.title.slice(0, 30)} */}
												{data.title.length > 24
													? data.title.substring(0, 21) + "..."
													: data.title}
											</h5>

											<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
												{/* {data.description.slice(0, 10)} */}
												{data.description.length > 81
													? data.description.substring(0, 80) + "..."
													: data.description}
											</p>
											<div className="flex justify-between">
												<Link to={`/eventdetail/${data.id}`}>
													<button className="inline-flex items-start px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
														Read more
														<svg
															className="w-4 h-4 ml-2 -mr-1"
															fill="currentColor"
															viewBox="0 0 20 20"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
																clipRule="evenodd"
															></path>
														</svg>
													</button>
												</Link>
											</div>
										</div>
									</div>
								))}
						</div>
					)}
					{/* event end */}
				</div>
			</div>
		</>
	);
};

export default Home;

// <div className="grid grid-cols-4 gap-6 mt-3">
// 	{posts &&
// 		posts.slice(0, 4).map((data) => (
// 			<div className="max-w-sm border border-gray-100 rounded-lg shadow-md bg-red-50 dark:bg-red-50 dark:border-gray-700">
// 				<img
// 					className="w-full h-32 rounded-t-lg"
// 					src={`http://44.199.61.81:8080/${
// 						data.postimage_set[0].image.split("8000/")[1]
// 					}`}
// 					alt=""
// 					style={{ height: "200px" }}
// 				/>

// 				<div className="p-5">
// 					<Link to={`/detail/${data.id}`}>
// 						<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
// 							{data.title}
// 						</h5>
// 					</Link>
// 					<p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
// 						{data.description.slice(0, 90)}
// 					</p>

// 					<Link
// 						to={`/detail/${data.id}`}
// 						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// 					>
// 						Read more
// 						<svg
// 							className="w-4 h-4 ml-2 -mr-1"
// 							fill="currentColor"
// 							viewBox="0 0 20 20"
// 							xmlns="http://www.w3.org/2000/svg"
// 						>
// 							<path
// 								fill-rule="evenodd"
// 								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
// 								clip-rule="evenodd"
// 							></path>
// 						</svg>
// 					</Link>
// 				</div>
// 			</div>
// 		))}
// </div>
