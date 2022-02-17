import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const Personal = ({ title, closeModal, isOpen }) => {
	const url = "http://192.108.1.106:8000/api/registeradmin";
	const [achiv, setAchiv] = useState("");

	const [award, setAward] = useState();
	const [cont, setCont] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(achiv, award, cont);
		let config = {
			headers: {
				"Content-Type": "multipart/form-data",
				Accept: "application/json",
				type: "formData",
			},
		};
		await axios.post(url, { achiv, award, cont }, config);
	};
	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						Achivements
						<textarea
							class=" rounded-md border-2 border-slate-900 w-96 h-20 placeholder:text-center"
							onChange={(e) => setAchiv(e.target.value)}
							id="name"
							value={achiv}
							placeholder="Achivements"
							type="text"
						/>
					</div>

					<div className="mt-4">
						Awards
						<textarea
							class=" rounded-md border-2 border-slate-900 w-96 h-20 placeholder:text-center"
							onChange={(e) => setAward(e.target.value)}
							id="name"
							value={award}
							placeholder="awards"
						/>
					</div>
					<div className="mt-4">
						Contribution
						<textarea
							class=" rounded-md border-2 border-slate-900 w-96 h-20 placeholder:text-center"
							onChange={(e) => setCont(e.target.value)}
							id="location"
							value={cont}
							placeholder="contribution"
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

export default Personal;
