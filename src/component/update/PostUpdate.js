import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../../actions/PostAction";
import { POST_UPDATE_RESET } from "../../constants/PostConstants";

const PostUpdate = ({ title, closeModal, isOpen, postDetail }) => {
	const [postTitle, setpostTitle] = useState("");

	const [description, setDescription] = useState();
	const [img, setImg] = useState([]);
	const [link, setLink] = useState([]);

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;
	const [message, setMessage] = useState("");

	const postUpdate = useSelector((state) => state.postUpdate);
	const { success: successAdd } = postUpdate;

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: POST_UPDATE_RESET });
			setPreviewSource("");
		}
	}, [successAdd]);

	const dispatch = useDispatch();
	setTimeout(() => setMessage(""), 3000);

	const [previewSource, setPreviewSource] = useState();

	const previewFile = (file) => {
		console.log(file);
		const reader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
		}
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	useEffect(() => {
		if (postDetail) {
			setpostTitle(postDetail.title);
			setDescription(postDetail.description);
			setImg(postDetail.image);
			setLink(postDetail.link);
		}
	}, [postDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (title.length > 100) {
			setMessage("Please Enter less than 100 character");
		} else {
			setTimeout(() => setMessage(""), 3000);
			dispatch(
				updatePost(postTitle, description, link, img, postDetail.id, userId)
			);
		}
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
						<span className="text-red-700">{message}</span>
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
							// onChange={
							// 	((e) => setImg(e.target.files[0]),
							// 	previewFile(e.target.files[0]))
							// }
							onChange={(e) => (
								setImg(e.target.files[0]), previewFile(e.target.files[0])
							)}
							multiple
						/>
					</div>
					{previewSource && (
						<div className="w-full mt-3 h-[260px]">
							<img
								src={previewSource}
								className="w-full h-full object-fit profile-img"
								alt="profile"
							/>
						</div>
					)}
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm mt hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
