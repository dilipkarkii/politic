import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../../actions/PostAction";

const PostUpdate = ({ title, closeModal, isOpen, postDetail }) => {
	const [postTitle, setpostTitle] = useState("");

	const [description, setDescription] = useState();
	const [img, setImg] = useState([]);
	const userId = localStorage.getItem("userId");

	const dispatch = useDispatch();
	useEffect(() => {
		if (postDetail) {
			setpostTitle(postDetail.title);
			setDescription(postDetail.description);
			setImg(postDetail.image);
		}
	}, [postDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(updatePost(postTitle, description, img, postDetail.id, userId));
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	console.log(postTitle, Description, img);
	// 	let config = {
	// 		headers: {
	// 			"Content-Type": "multipart/form-data",
	// 			Accept: "application/json",
	// 			type: "formData",
	// 		},
	// 	};
	// 	const { data } = await axios.post(
	// 		url,
	// 		{ postTitle, Description, img },
	// 		config
	// 	);
	// 	if (data) {
	// 		window.location.reload(true);
	// 	}
	// };
	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						<label className="block text-sm font-medium text-gray-700">
							Title
						</label>

						<textarea
							className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
							onChange={(e) => setpostTitle(e.target.value)}
							id="name"
							defaultValue={postTitle}
							placeholder="title"
							type="text"
						/>
					</div>

					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Description
						</label>
						<textarea
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm h-72 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
							onChange={(e) => setDescription(e.target.value)}
							id="name"
							defaultValue={description}
							placeholder="description"
							type="text"
						/>
					</div>
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
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-2 py-1 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						update
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default PostUpdate;
