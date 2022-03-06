import React, { useState } from "react";
import Modelwrapper from "./modelwrapper";
import axios from "axios";

const PersonalProfile = ({ title, closeModal, isOpen }) => {
	const url = "http://44.199.61.81/politician/";

	const [pname, setPname] = useState();
	const [age, setAge] = useState("");
	const [address, setAddress] = useState("");
	const [edu, setEdu] = useState("");
	const [party, setParty] = useState("");
	const [area, setArea] = useState("");
	const [member, setMember] = useState("");
	const [pos, setPos] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(pname, age);
		// let config = {
		// 	headers: {
		// 		"Content-Type": "multipart/form-data",
		// 		Accept: "application/json",
		// 	},
		// };
	const { data } = await axios.post(
		url,
		{
			firstname: pname,
			age,
			address,
			education: edu,
			politicalBackground: party,
			electionArea: area,
			memberSince: member,
			position: pos,
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
					<label className="block">Name</label>
					<input
						onChange={(e) => setPname(e.target.value)}
						id="name"
						value={pname}
						placeholder="Name"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Age</label>
					<input
						onChange={(e) => setAge(e.target.value)}
						id="name"
						value={age}
						placeholder="Age"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Address</label>
					<input
						onChange={(e) => setAddress(e.target.value)}
						id="name"
						value={address}
						placeholder="Address"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Political party</label>
					<input
						onChange={(e) => setParty(e.target.value)}
						id="name"
						value={party}
						placeholder="party name"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Education</label>
					<input
						onChange={(e) => setEdu(e.target.value)}
						id="name"
						value={edu}
						placeholder="party name"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Election Area</label>
					<input
						onChange={(e) => setArea(e.target.value)}
						id="name"
						value={area}
						placeholder="Area of election"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Member since</label>
					<input
						onChange={(e) => setMember(e.target.value)}
						id="name"
						value={member}
						placeholder="member since"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Position in Party</label>
					<input
						onChange={(e) => setPos(e.target.value)}
						id="name"
						value={pos}
						placeholder="party"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
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
