import React, { useEffect, useState } from "react";
import axios from "axios";
import Modelwrapper from "../model/modelwrapper";

const PlanUpdate = ({ title, closeModal, isOpen, planDetail }) => {
	console.log(planDetail);
	const url = `http://44.199.61.81/plan-vision/${planDetail.id}`;

	const [pname, setPname] = useState();
	const [pdes, setPdes] = useState("");
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		if (planDetail) {
			setPname(planDetail.plan);
			setPdes(planDetail.vision);
		}
	}, [planDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			plan: pname,
			vision: pdes,
			politician: userId,
		});

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch(`http://44.199.61.81/plan-vision/${planDetail.id}/`, requestOptions)
			.then((response) => response.text())
			.then((result) => {
				if (result) {
					window.location.reload(true);
				}
			})
			.catch((error) => console.log("error", error));
	};
	console.log(pname, pdes);
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label className="block">Plan Title</label>
					<input
						onChange={(e) => setPname(e.target.value)}
						id="name"
						defaultValue={pname}
						placeholder="Title"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-5 ">
					<label className="block">Plan Description</label>
					<textarea
						className="w-full h-16 px-3 py-1 border-2 rounded-md resize-y border-slate-900 placeholder:text-black"
						onChange={(e) => setPdes(e.target.value)}
						id="des"
						defaultValue={pdes}
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

export default PlanUpdate;
