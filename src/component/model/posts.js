import React, { useEffect, useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../actions/PostAction";
import { addPostImage } from "../../actions/PostImageAction";
import { POST_ADD_RESET } from "../../constants/PostConstants";

const Posts = ({ title, closeModal, isOpen }) => {
	const dispatch = useDispatch();
	const [Title, setTitle] = useState("");
	const [description, setDescription] = useState();
	const [img, setImg] = useState();
	const [link, setLink] = useState();
	const [formPost, setFormPost] = useState();
	console.log("formPost", formPost);
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	const postAdd = useSelector((state) => state.postAdd);
	const { posts, success: successPost, loading: loadingPost } = postAdd;
	const [message, setMessage] = useState("");

	console.log("posts", posts);

	useEffect(() => {
		setTimeout(() => setMessage(""), 3000);
		if (successPost) {
			dispatch({ type: POST_ADD_RESET });
			setTitle("");
			setDescription("");
			setLink("");
		}
	}, [successPost]);
	// const handleSubmission = async (e) => {
	// 	e.preventDefault();
	// 	console.log("first");
	// 	dispatch(addPostImage(img, posts.id));
	// 	// var myHeaders = new Headers();

	// 	// var formdata = new FormData();
	// 	// formdata.append("image", img, img.name);
	// 	// formdata.append("post", formPost.id);

	// 	// var requestOptions = {
	// 	// 	method: "POST",
	// 	// 	headers: myHeaders,
	// 	// 	body: formdata,
	// 	// 	redirect: "follow",
	// 	// };

	// 	// fetch("http://backend.publicaffairsnepal.com/create_post_image/", requestOptions)
	// 	// 	.then((response) => response.text())
	// 	// 	.then((result) => {
	// 	// 		if (result) {
	// 	// 			window.location.reload(true);
	// 	// 		}
	// 	// 	})
	// 	// 	.catch((error) => console.log("error", error));
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Title.length > 100) {
			setMessage("Please Enter less than 100 character");
		} else {
			setTimeout(() => setMessage(""), 3000);
			dispatch(addPost(Title, description, link, userId, img));
		}
	};

	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						<label className="block text-sm font-medium text-gray-700">
							Title
						</label>
						<input
							// className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							onChange={(e) => setTitle(e.target.value)}
							id="name"
							value={Title}
							placeholder="Enter Title"
							type="text"
							required
						/>
						<span className="text-red-700">{message}</span>
					</div>

					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							{" "}
							Description
						</label>
						<textarea
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm h-72 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
							onChange={(e) => setDescription(e.target.value)}
							id="name"
							value={description}
							placeholder="Enter Description"
							type="text"
							required
						/>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Link
						</label>
						<textarea
							className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
							onChange={(e) => setLink(e.target.value)}
							id="name"
							value={link}
							placeholder="Enter Link"
							type="url"
						/>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Image
						</label>
						<input
							className="w-full mt-2 border border-gray-300 rounded-md"
							type="file"
							onChange={(e) => setImg(e.target.files[0])}
							multiple
							required
						/>
					</div>
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClose={closeModal}
					>
						Submit
					</button>
				</form>

				{/* <form*/}

				{/* </form> */}
				{/* <form onSubmit={handleSubmission}>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							IMAGE:
						</label>
						<input
							className="mt-2"
							type="file"
							onChange={(e) => setImg(e.target.files[0])}
							multiple
						/>
					</div>
					<input
						type="submit"
						value="Upload Image"
						className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
					/>
				</form> */}
			</Modelwrapper>
		</>
	);
};

export default Posts;
