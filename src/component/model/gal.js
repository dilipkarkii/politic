import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const Gal = ({ title, closeModal, isOpen }) => {
  const url = "http://192.168.1.106:8000/api/registeradmin";
	const [des, setDes] = useState("");

  const [pic, setPic] = useState();
  
   const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(des, pic);
		let config = {
			headers: {
				"Content-Type": "multipart/form-data",
				Accept: "application/json",
				type: "formData",
			},
		};
		await axios.post(url, { des, pic }, config);
	};
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-2 w-fit">
					<textarea
						class="resize-y rounded-md border-2 border-slate-900 w-96 h-16 placeholder:text-center"
						onChange={(e) => setDes(e.target.value)}
						id="name"
						value={des}
						placeholder="Set description"
						type="text"
					/>
				</div>

				<div className="mt-4">
					<input
						onChange={(e) => setPic(e.target.value)}
						id="name"
						value={pic}
						placeholder="name"
						type="file"
						multiple
					/>
					<br />
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
