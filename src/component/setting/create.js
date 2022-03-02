import React, { useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";

const Create = ({ title, closeModal, isOpen }) => {
	const url = "http://politician.tk/politician/";

	const [fname, setFname] = useState();
	const [upass, setUpass] = useState("");
	const [uname, setUname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [lastname, setLastname] = useState("");
	const [age, setAge] = useState("");
	const [address, setAddress] = useState("");
	const [edu, setEdu] = useState("");
	const [party, setParty] = useState("");
	const [area, setArea] = useState("");
	const [member, setMember] = useState("");
	const [pos, setPos] = useState("");
	const [description, setDescription] = useState("");
	const [flag, setFlag] = useState("");
	const [photo, setPhoto] = useState("");
	const [slogan, setSlogan] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(uname, upass, email, phone);
		// let config = {
		// 	headers: {
		// 		"Content-Type": "multipart/form-data",
		// 		Accept: "application/json",
		// 		// type: "formData",
		// 	},
		// };

		let formData = new FormData();
		formData.append("flag", flag);
		formData.append("firstName", uname);
		formData.append("lastName", lastname);
		formData.append("password", upass);
		formData.append("age", age);
		formData.append("username", uname);
		formData.append("email", email);
		formData.append("phone", phone);
		formData.append("address", address);
		formData.append("education", edu);
		formData.append("description", description);
		formData.append("politicalBackground", party);
		formData.append("electionArea", area);
		formData.append("memberSince", member);
		formData.append("position", pos);
		formData.append("slogan", slogan);
		formData.append("profilePhoto", photo);

		await axios.post(
			url,
			formData
			// {
			// 	firstName: uname,
			// 	lastName: lastname,
			// 	password: upass,
			// 	age,
			// 	userName: uname,
			// 	email,
			// 	phone,
			// 	address,
			// 	education: edu,
			// 	description,
			// 	politicalBackground: party,
			// 	electionArea: area,
			// 	memberSince: member,
			// 	position: pos,
			// 	slogan,
			// 	formData,
			// }
			// config
		);
	};
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label className="block">firstName</label>
					<input
						onChange={(e) => setFname(e.target.value)}
						id="fname"
						value={fname}
						placeholder="firstname"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">lastname</label>
					<input
						onChange={(e) => setLastname(e.target.value)}
						id="lname"
						value={lastname}
						placeholder="lastname"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Usename</label>
					<input
						onChange={(e) => setUname(e.target.value)}
						id="uname"
						value={uname}
						placeholder="username"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block"> phone</label>
					<input
						onChange={(e) => setPhone(e.target.value)}
						id="phone"
						value={phone}
						placeholder="phone no"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">email</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						id="email"
						value={email}
						type="email"
						placeholder="email"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Age</label>
					<input
						onChange={(e) => setAge(e.target.value)}
						id="age"
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
						id="address"
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
						id="party"
						value={party}
						placeholder="party name"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">slogan</label>
					<input
						onChange={(e) => setSlogan(e.target.value)}
						id="slogan"
						value={slogan}
						placeholder="slogan"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Education</label>
					<input
						onChange={(e) => setEdu(e.target.value)}
						id="education"
						value={edu}
						placeholder="education"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Election Area</label>
					<input
						onChange={(e) => setArea(e.target.value)}
						id="area"
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
						id="member"
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
						id="position"
						value={pos}
						placeholder="party position"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">Description</label>
					<input
						onChange={(e) => setDescription(e.target.value)}
						id="description"
						value={description}
						placeholder="About"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">flag </label>
					<input
						onChange={(e) => setFlag(e.target.files[0])}
						id="flag"
						// value={flag}
						// placeholder="About"
						type="file"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block">photo</label>
					<input
						onChange={(e) => setPhoto(e.target.files[0])}
						accept="image/png, image/jpg, image/jpeg"
						id="poto"
						// value={photo}
						// placeholder="photo"
						type="file"
						className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
					/>
					<br />
				</div>
				<div className="mt-5 ">
					<label className="block">password</label>
					<input
						className="resize-y rounded-md border-2 border-slate-900 w-full h-16 px-3 py-1 placeholder:text-black"
						onChange={(e) => setUpass(e.target.value)}
						id="password	"
						value={upass}
						placeholder="Set password"
						type="password"
					/>
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						Create
					</button>
				</div>
			</form>
		</Modelwrapper>
	);
};

export default Create;
