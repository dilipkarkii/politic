import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../model/posts";
import PostUpdate from "../update/PostUpdate";
import Navbartop from "./navbar";

const Post = () => {
	let [isOpen, setIsOpen] = useState(false);

	let [openUpdate, setOpenUpdate] = useState(false);
	let [postDetail, setPostDetail] = useState();
	let [postData, setPostData] = useState();
	console.log(postDetail);
	const userId = localStorage.getItem("userId");

	console.log(postData);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	const closeUpdateModal = () => {
		setOpenUpdate(false);
	};
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
	// const onDelete = async (id) => {
	// 	await axios.delete(`http://44.199.61.81/event/${id}`);
	// };
	const onDelete = (id) => {
		var raw = "";

		var requestOptions = {
			method: "DELETE",
			body: raw,
			redirect: "follow",
		};

		fetch(`http://44.199.61.81/create_post/${id}/`, requestOptions)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	};
	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />
				<div className="py-20  h-full  p-3 max-w-6xl mx-auto px-4 bg-slate-300">
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
					<div className="py-10  h-full  p-3 max-w-6xl mx-auto px-4">
						<div className="grid grid-cols-4 gap-4 ">
							{postData &&
								postData.map((data) => (
									<div
										key={data.id}
										className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
									>
										<img
											className="w-full h-32 rounded-t-lg"
											src={`http://44.199.61.81/${
												data.postimage_set[0].image.split("8000/")[1]
											}`}
											alt=""
										/>

										<div className="p-5">
											<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
												{data.title}
											</h5>

											<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
												{data.description.slice(0, 90)}
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
												<button
													onClick={() => onDelete(data.id)}
													className="hover:bg-red-900"
												>
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
												<button
													className="hover:bg-blue-400"
													onClick={() => (
														// eslint-disable-next-line no-sequences
														setOpenUpdate(true), setPostDetail()
													)}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="blue"
													>
														<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
														<path
															fillRule="evenodd"
															d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
															clipRule="evenodd"
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
			<PostUpdate
				title="update Post"
				closeModal={closeUpdateModal}
				isOpen={openUpdate}
				postDetail={postDetail}
			/>
		</>
	);
};

export default Post;
