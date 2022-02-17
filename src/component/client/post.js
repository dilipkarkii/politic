import React, { useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../model/posts";
import news from "./data";
import Navbartop from "./navbar";

const Post = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<Navbartop />
			<div class="py-20  h-full  p-3 max-w-6xl mx-auto px-4 bg-slate-300">
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
				<div class="py-10  h-full  p-3 max-w-6xl mx-auto px-4">
					<div className="grid grid-cols-4 gap-4 ">
						{news.map((data) => (
							<div class="max-w-sm bg-white rounded-lg border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700">
								<a href="#">
									<img
										class="rounded-t-lg h-32 w-full"
										src="https://picsum.photos/200"
										alt=""
									/>
								</a>
								<div class="p-5">
									<a href="#">
										<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
											{data.title}
										</h5>
									</a>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										{data.description}
									</p>
									<Link to={`/blog/${data.id}`}>
										<a class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
											Read more
											<svg
												class="ml-2 -mr-1 w-4 h-4"
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
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;
