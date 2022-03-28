import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const PersonalProfile = ({ title, closeModal, isOpen }) => {
	const url = "http://44.199.61.81:8080/manifesto/";

	const [file, setFile] = useState();
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(file);

		const { data } = await axios.post(
			url,
			{
				manifesto: file,
				politician: userId,
			}
			// config
		);
		if (data) {
			window.location.reload(true);
		}
	};
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						upload your Manifesto
					</label>
					<input
						onChange={(e) => setFile(e.target.files[0])}
						accept="application/pdf"
						id="file"
						type="file"
						required
						className="block w-full mt-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-5 ">
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

export default PersonalProfile;
