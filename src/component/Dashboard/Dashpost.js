import React, { useState } from "react";
// import { Link } from "react-router-dom";
import news from "../client/data";
import Posts from "../model/posts";
import Dashnav from "./Dashnav";

const DashPost = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<div className="bg-slate-300">
				<Dashnav />
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto bg-slate-300">
					<div className="inset-0 flex items-center justify-end ">
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							{"Add posts"}
						</button>
					</div>
					<Posts title="Add Post" closeModal={closeModal} isOpen={isOpen} />
					<div className="h-full max-w-6xl p-3 px-4 py-10 mx-auto">
						<div className="grid grid-cols-4 gap-4 ">
							{news.map((data) => (
								<div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
									<a href="#">
										<img
											className="w-full h-32 rounded-t-lg"
											src="https://picsum.photos/200"
											alt=""
										/>
									</a>
									<div className="p-5">
										<a href="#">
											<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
												{data.title}
											</h5>
										</a>
										<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
											{data.description}
										</p>
										<div className="flex justify-between">
											{/* <Link to={`/blog/${data.id}`}> */}
											<button class="inline-flex items-start py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
											</button>
											{/* </Link> */}
											<button className="hover:bg-red-900">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 "
													fill="none"
													viewBox="0 0 24 24"
													stroke="red"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													/>
												</svg>
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashPost;
