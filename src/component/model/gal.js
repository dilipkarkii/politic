import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const Gal = ({ title, closeModal, isOpen }) => {
	const url = "http://44.199.61.81/gallery/";
	const [des, setDes] = useState("");

	const [pic, setPic] = useState();
	const [pid, setPid] = useState();
	const userId = localStorage.getItem("userId");

	let formData = new FormData();
	formData.append("image", pic);
	formData.append("description", des);
	formData.append("owner", userId);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(des, pic);
		let config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};
		const { data } = await axios.post(url, formData, config);
			if (data) {
				window.location.reload(true);
			}
	};

	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-2 w-fit">
					<label> Description</label>
					<textarea
						className="h-32 px-3 py-1 mt-3 border-2 rounded-md w-96 border-slate-900 placeholder:text-black"
						onChange={(e) => setDes(e.target.value)}
						id="des"
						value={des}
						placeholder="Set description"
						type="text"
					/>
				</div>

				<div className="mt-4">
					<label> Image:</label>
					<input
						onChange={(e) => setPic(e.target.files[0])}
						id="img"
						className="px-1"
						// value={pic}
						placeholder="name"
						type="file"
						multiple
					/>

					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						submit
					</button>
				</div>
			</form>
		</Modelwrapper>
	);
};

export default Gal;
