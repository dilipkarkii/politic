import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const Posts = ({ title, closeModal, isOpen }) => {
	const [Title, setTitle] = useState("");
	const [description, setDescription] = useState();
	const [img, setImg] = useState([]);
	const [formPost, setFormPost] = useState();
	console.log("formPost", formPost);
	const userId = localStorage.getItem("userId");

	const ImageHandle = async (e) => {
		const file = e.target.files[0];
		let formData = new FormData();
		formData.append("image", file);
		formData.append("post", formPost.id);

		let config = {
			headers: {
				"Content-Type": "multipart/form-data",
				// accept: "application/json",
			},
		};
		const { data } = await axios.post(
			`http://politician.tk/create_post_image/`,
			{
				formData,
			},
			config
		);

		setImg(data);
		console.log("img", file);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(Title, description, img);
		// let config = {
		// 	headers: {
		// 		"Content-Type": "multipart/form-data",
		// 		Accept: "application/json",
		// 		type: "formData",
		// 	},
		// };
		const { data } = await axios.post("http://politician.tk/create_post/", {
			title: Title,
			description,
			posted_by: userId,
		});
		setFormPost(data);
		console.log(data);
	};
	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						Title
						<textarea
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setTitle(e.target.value)}
							id="name"
							value={Title}
							placeholder="title"
							type="text"
						/>
					</div>

					<div className="mt-4">
						Description
						<textarea
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setDescription(e.target.value)}
							id="name"
							value={description}
							placeholder="description"
						/>
					</div>
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-2 py-1 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						Add
					</button>
				</form>

				{/* <form onSubmit={ImageHandle}> */}
				<div className="mt-4">
					<label>IMAGE:</label>
					<input className="px-3" onChange={ImageHandle} type="file" />
				</div>

				<br />
				<button
					type="submit"
					// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
					className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
					onClose={closeModal}
				>
					submit
				</button>
				{/* </form> */}
			</Modelwrapper>
		</>
	);
};

export default Posts;
