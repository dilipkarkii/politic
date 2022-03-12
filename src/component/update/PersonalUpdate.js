import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";


const PersonalUpdate = ({ title, closeModal, isOpen, personalDetail }) => {
	// const url = "http://44.199.61.81/posts/";

	console.log("dsata", personalDetail);
	const [fname, setFname] = useState();
	const [lname, setLname] = useState();
	const [uname, setUname] = useState();
	const [age, setAge] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();
	const [edu, setEdu] = useState();
	const [party, setParty] = useState();
	const [area, setArea] = useState();
	const [member, setMember] = useState();
	const [position, setPosition] = useState();
	const [password, setPassword] = useState();
	const [slogan, setSlogan] = useState();
	const [description, setDescription] = useState();
	const [flag, setFlag] = useState();
	const [profilePhoto, setProfilePhoto] = useState();

	useEffect(() => {
		if (personalDetail) {
			setFname(personalDetail.firstName);
			setLname(personalDetail.lastName);
			setAge(personalDetail.age);
			setUname(personalDetail.username);
			setEmail(personalDetail.email);
			setPhone(personalDetail.phone);
			setAddress(personalDetail.address);
			setEdu(personalDetail.education);
			setParty(personalDetail.politicalBackground);
			setArea(personalDetail.electionArea);
			setPosition(personalDetail.position);
			setMember(personalDetail.memberSince);
			setPassword(personalDetail.password);
			setSlogan(personalDetail.slogan);
			setDescription(personalDetail.description);
			setFlag(personalDetail.flag);
			setProfilePhoto(personalDetail.profilePhoto);
		}
	}, [personalDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(fname, age, address, edu, party, area, member, position);
		let config = {
			headers: {
				"Content-Type": "application/json",
				// Accept: "application/json",
				// type: "formData",
			},
		};
		const { data } = await axios.put(
			`http://44.199.61.81/politician/${personalDetail.id}/`,
			{
				firstName: fname,
				lastName: lname,
				username: uname,
				age,
				email,
				address,
				phone,
				education: edu,
				politicalBackground: party,
				electionArea: area,
				memberSince: member,
				position,
				password,
				slogan,
				description,
				flag,
				profilePhoto,
			},
			config
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
						FirstName
					</label>
					<input
						onChange={(e) => setFname(e.target.value)}
						id="fname"
						defaultValue={fname}
						placeholder="FirstName"
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						lastName
					</label>
					<input
						onChange={(e) => setLname(e.target.value)}
						id="lname"
						defaultValue={lname}
						placeholder="last Name"
						// className="block w-full px-3 py-2 mt-1 border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						className="block w-full h-10 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">Age</label>
					<input
						onChange={(e) => setAge(e.target.value)}
						id="name"
						type="number"
						defaultValue={age}
						placeholder="Age"
						className="block w-full h-10 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Address
					</label>
					<input
						onChange={(e) => setAddress(e.target.value)}
						id="name"
						defaultValue={address}
						placeholder="Address"
						className="block w-full h-10 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Political party
					</label>
					<input
						onChange={(e) => setParty(e.target.value)}
						id="name"
						defaultValue={party}
						placeholder="party name"
						className="block w-full h-10 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Education
					</label>
					<input
						onChange={(e) => setEdu(e.target.value)}
						id="name"
						defaultValue={edu}
						placeholder="education"
						className="block w-full h-10 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Election Area
					</label>
					<input
						onChange={(e) => setArea(e.target.value)}
						id="name"
						defaultValue={area}
						placeholder="Area of election"
						className="block w-full h-10 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Member since
					</label>
					<input
						onChange={(e) => setMember(e.target.value)}
						id="name"
						defaultValue={member}
						placeholder="member since"
						className="block w-full h-10 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<br />
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Position in Party
					</label>
					<input
						onChange={(e) => setPosition(e.target.value)}
						id="position"
						defultValue={position}
						placeholder="party"
						className="block w-full h-10 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

export default PersonalUpdate;
