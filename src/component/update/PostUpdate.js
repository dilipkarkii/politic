import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../../actions/PostAction";

const PostUpdate = ({ title, closeModal, isOpen, postDetail }) => {
	const [postTitle, setpostTitle] = useState("");

	const [description, setDescription] = useState();
	const [img, setImg] = useState([]);
	const [link, setLink] = useState([]);

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

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
		dispatch(
			updatePost(postTitle, description, link, img, postDetail.id, userId)
		);
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

						<input
							className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
							onChange={(e) => setpostTitle(e.target.value)}
							id="name"
							defaultValue={postTitle}
							placeholder="Enter Title"
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
							placeholder="Enter Description"
							type="text"
						/>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Link
						</label>
						<textarea
							className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
							onChange={(e) => setLink(e.target.value)}
							id="link"
							defaultValue={link}
							placeholder="Enter Description"
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
						/>
					</div>
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClose={closeModal}
					>
						Update
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default PostUpdate;
