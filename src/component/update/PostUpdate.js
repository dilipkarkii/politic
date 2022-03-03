import React, { useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";

const PostUpdate = ({ title, closeModal, isOpen }) => {
	const url = "http://192.108.1.106:8000/api/registeradmin";
	const [postTitle, setpostTitle] = useState("");

	const [Description, setDescription] = useState();
	const [img, setImg] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(postTitle, Description, img);
		let config = {
			headers: {
				"Content-Type": "multipart/form-data",
				Accept: "application/json",
				type: "formData",
			},
		};
		await axios.post(url, { postTitle, Description, img }, config);
	};
	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						Title
						<textarea
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setpostTitle(e.target.value)}
							id="name"
							defaultvalue={postTitle}
							placeholder="title"
							type="text"
						/>
					</div>

					<div className="mt-4">
						Description
						<textarea
							className="w-full px-3 py-1 border-2 rounded-md h-72 border-slate-900 placeholder:text-black"
							onChange={(e) => setDescription(e.target.value)}
							id="name"
							defaultvalue={Description}
							placeholder="description"
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

				<form>
					<div className="mt-4">
						Image:
						<input
							className="px-1"
							onChange={(e) => setImg(e.target.value)}
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

export default PostUpdate;
