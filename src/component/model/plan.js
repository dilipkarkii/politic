import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const Planmodel = ({ title, closeModal, isOpen }) => {
	const url = "http://politician.tk/plan-vision/";

	const [pname, setPname] = useState();
	const [pdes, setPdes] = useState("");
	const userId = localStorage.getItem("userId");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(pname, pdes);
		let config = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				// type: "formData",
			},
		};
		await axios.post(
			url,
			{ plan: pname, vision: pdes, politician: userId },
			config
		);
	};
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label className="block">Plan Title</label>
					<input
						onChange={(e) => setPname(e.target.value)}
						id="name"
						value={pname}
						placeholder="Title"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-5 ">
					<label className="block">Plan Description</label>
					<textarea
						class="resize-y rounded-md border-2 border-slate-900 w-full h-16 px-3 py-1 placeholder:text-black"
						onChange={(e) => setPdes(e.target.value)}
						id="name"
						value={pdes}
						placeholder="Set description"
						type="text"
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

export default Planmodel;
