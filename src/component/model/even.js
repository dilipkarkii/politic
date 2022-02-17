import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const Even = ({ title, closeModal, isOpen }) => {
	const url = "http://192.108.1.106:8000/api/registeradmin";
	const [name, setName] = useState("");

	const [agenda, setAgenda] = useState();
	const [loc, setLoc] = useState();
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [link, setLink] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(name, agenda, loc, date, time, link);
		let config = {
			headers: {
				"Content-Type": "multipart/form-data",
				Accept: "application/json",
				type: "formData",
			},
		};
		await axios.post(url, { name, agenda, loc, date, time, link }, config);
	};
	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						<input
							class=" rounded-md border-2 border-slate-900 w-96 h-10 placeholder:text-center"
							onChange={(e) => setName(e.target.value)}
							id="name"
							value={name}
							placeholder="Set Name"
							type="text"
						/>
					</div>

					<div className="mt-4">
						<textarea
							class=" rounded-md border-2 border-slate-900 w-96 h-20 placeholder:text-center"
							onChange={(e) => setAgenda(e.target.value)}
							id="name"
							value={agenda}
							placeholder="Agenda"
						/>
					</div>
					<div className="mt-4">
						<input
							class=" rounded-md border-2 border-slate-900 w-96 h-10 placeholder:text-center"
							onChange={(e) => setLoc(e.target.value)}
							id="location"
							value={loc}
							placeholder="Location"
						/>
					</div>
					<div className="mt-4">
						<input
							class=" rounded-md border-2 border-slate-900 w-30 h-10 placeholder:text-center"
							onChange={(e) => setDate(e.target.value)}
							id="date"
							value={date}
							placeholder="date"
						/>
					</div>
					<div className="mt-4">
						<input
							class=" rounded-md border-2 border-slate-900 w-30 h-10 placeholder:text-center"
							onChange={(e) => setTime(e.target.value)}
							id="time"
							value={time}
							placeholder="time"
						/>
					</div>
					<div className="mt-4">
						<input
							class=" rounded-md border-2 border-slate-900 w-96 h-10 placeholder:text-center"
							onChange={(e) => setLink(e.target.value)}
							id="link"
							value={link}
							placeholder="Links"
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

export default Even;
