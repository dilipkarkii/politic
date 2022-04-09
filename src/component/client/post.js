import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../model/posts";
import PostUpdate from "../update/PostUpdate";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, listPost } from "../../actions/PostAction";
import { POST_UPDATE_RESET } from "../../constants/PostConstants";
import {
	POSTIMAGE_ADD_RESET,
	POSTIMAGE_UPDATE_RESET,
	POSTIMAGE_DELETE_REQUEST,
} from "../../constants/PostImageConstants";
import ReactPaginate from "react-paginate";
// import { data } from "autoprefixer";

const Post = () => {
	const dispatch = useDispatch();
	let [isOpen, setIsOpen] = useState(false);

	let [openUpdate, setOpenUpdate] = useState(false);
	let [postDetail, setPostDetail] = useState();
	let [postData, setPostData] = useState();
	console.log("postDetail", postDetail);
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	const postImageAdd = useSelector((state) => state.postImageAdd);
	const { success: successPostImage, loading: loadingPostImage } = postImageAdd;
	const postList = useSelector((state) => state.postList);
	const { posts } = postList;
	const postDelete = useSelector((state) => state.postDelete);
	const { success: successPostDelete } = postDelete;
	const postImageUpdate = useSelector((state) => state.postImageUpdate);
	const { success: successUpdate } = postImageUpdate;
	const postUpdate = useSelector((state) => state.postUpdate);
	const { success: successPostUpdate } = postUpdate;

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
		dispatch(listPost(userId));
		setIsOpen(false);
		dispatch({ type: POSTIMAGE_DELETE_REQUEST });
		dispatch({ type: POSTIMAGE_ADD_RESET });
		dispatch({ type: POSTIMAGE_UPDATE_RESET });
		dispatch({ type: POST_UPDATE_RESET });
		if (successUpdate || successPostUpdate) {
			setIsOpen(false);
			setOpenUpdate(false);
		}
	}, [successPostImage, successPostDelete, successUpdate, successPostUpdate]);

	const onDelete = (id) => {
		dispatch(deletePost(id));
	};

	// let itemsPerPage = 10;
	// const [currentItems, setCurrentItems] = useState(null);
	// const [pageCount, setPageCount] = useState(0);
	// // Here we use item offsets; we could also use page offsets
	// // following the API or data you're working with.
	// const [itemOffset, setItemOffset] = useState(0);

	// useEffect(() => {
	// 	// Fetch items from another resources.
	// 	const endOffset = itemOffset + itemsPerPage;
	// 	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	// 	setCurrentItems(posts && posts.slice(itemOffset, endOffset));
	// 	setPageCount(Math.ceil(posts && posts.length / itemsPerPage));
	// }, [itemOffset, itemsPerPage]);

	// // Invoke when user click to request another page.
	// const handlePageClick = (event) => {
	// 	const newOffset = (event.selected * itemsPerPage) % posts.length;
	// 	console.log(
	// 		`User requested page number ${event.selected}, which is offset ${newOffset}`
	// 	);
	// 	setItemOffset(newOffset);
	// };

	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />
				<div className="max-w-6xl p-3 px-4 py-20 mx-auto bg-slate-300">
					<div className="flex items-center justify-between mb-4">
						<h1 className="text-2xl font-bold">Posts</h1>
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							{"Add posts"}
						</button>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
						{/* {currentItems &&
							currentItems.map((data) => ( */}
						{posts &&
							posts.map((data) => (
								<div
									key={data.id}
									className="bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
								>
									<img
										className="w-full h-32 rounded-t-lg"
										src={`http://backend.publicaffairsnepal.com/${
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
											<button onClick={() => onDelete(data.id)} className="">
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
												className=""
												onClick={() => (
													// eslint-disable-next-line no-sequences
													setOpenUpdate(true), setPostDetail(data)
												)}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="w-5 h-5"
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
					{/* {posts && posts.length < pageCount && ( */}
					{/* <ReactPaginate
						nextLabel=">"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						marginPagesDisplayed={2}
						pageCount={pageCount}
						previousLabel="<"
						pageClassName="page-item"
						pageLinkClassName="page-link"
						previousClassName="page-item"
						previousLinkClassName="page-link"
						nextClassName="page-item"
						nextLinkClassName="page-link"
						breakLabel="..."
						breakClassName="break-me"
						breakLinkClassName="page-link"
						containerClassName="pagination"
						activeClassName="active"
						renderOnZeroPageCount={null}
					/> */}
					{/* )} */}
				</div>
			</div>
			<PostUpdate
				title="update Post"
				closeModal={closeUpdateModal}
				isOpen={openUpdate}
				postDetail={postDetail}
			/>
			<Posts title="Add Post" closeModal={closeModal} isOpen={isOpen} />
		</>
	);
};

export default Post;
