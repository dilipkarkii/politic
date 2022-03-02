import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const Posts = ({ title, closeModal, isOpen }) => {
	const [Title, setTitle] = useState("");

	const [description, setDescription] = useState();
	const [img, setImg] = useState([]);

	const ImageHandle = async (e) => {
		const file = e.target.files[0];
		let formData = new FormData();
		formData.append("image", file);
		// e.preventDefault();
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
		console.log("img", img);
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
		await axios.post("http://politician.tk/create_post/", {
			title: Title,
			description,
			img,
		});
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
					<div className="mt-4">
						Image:
						<input
							className="px-1"
							onChange={ImageHandle}
							type="file"
							multiple
						/>
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
				</form>
			</Modelwrapper>
		</>
	);
};

export default Posts;
