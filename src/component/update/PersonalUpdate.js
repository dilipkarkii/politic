import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonal } from "../../actions/PersonalAction";

const PersonalUpdate = ({ title, closeModal, isOpen, personalDetail }) => {
	// const url = "http://44.199.61.81/posts/";
	const userId = localStorage.getItem("userId");
	const [fname, setFname] = useState();
	// const [upass, setUpass] = useState("");
	const [uname, setUname] = useState("");
	const [mname, setMname] = useState("");
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

	const dispatch = useDispatch();
	useEffect(() => {
		if (personalDetail) {
			setFname(personalDetail.firstName);
			setMname(personalDetail.middleName);
			setLastname(personalDetail.lastName);
			setAge(personalDetail.age);
			setUname(personalDetail.username);
			setEmail(personalDetail.email);
			setPhone(personalDetail.phone);
			setAddress(personalDetail.address);
			setEdu(personalDetail.education);
			setParty(personalDetail.politicalBackground);
			setArea(personalDetail.electionArea);
			setPos(personalDetail.position);
			setMember(personalDetail.memberSince);
			// setPassword(personalDetail.password);
			setSlogan(personalDetail.slogan);
			setDescription(personalDetail.description);
			setFlag(personalDetail.flag);
			setPhoto(personalDetail.profilePhoto);
		}
	}, [personalDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			updatePersonal(
				fname,
				mname,
				lastname,
				age,
				uname,
				email,
				phone,
				address,
				edu,
				area,
				pos,
				slogan,
				party,
				description,
				flag,
				photo,
				member,
				userId
			)
		);
	};

	console.log("dsata", personalDetail);

	// useEffect(() => {
	// 	if (personalDetail) {
	// 		setFname(personalDetail.firstName);
	// 		setLname(personalDetail.lastName);
	// 		setAge(personalDetail.age);
	// 		setUname(personalDetail.username);
	// 		setEmail(personalDetail.email);
	// 		setPhone(personalDetail.phone);
	// 		setAddress(personalDetail.address);
	// 		setEdu(personalDetail.education);
	// 		setParty(personalDetail.politicalBackground);
	// 		setArea(personalDetail.electionArea);
	// 		setPosition(personalDetail.position);
	// 		setMember(personalDetail.memberSince);
	// 		setPassword(personalDetail.password);
	// 		setSlogan(personalDetail.slogan);
	// 		setDescription(personalDetail.description);
	// 		setFlag(personalDetail.flag);
	// 		setProfilePhoto(personalDetail.profilePhoto);
	// 	}
	// }, [personalDetail]);
	// console.log("posi", position);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	// console.log(fname, age, address, edu, party, area, member, position);
	// 	let config = {
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			// Accept: "application/json",
	// 			// type: "formData",
	// 		},
	// 	};
	// 	const { data } = await axios.put(
	// 		`http://44.199.61.81/politician/${personalDetail.id}/`,
	// 		{
	// 			firstName: fname,
	// 			lastName: lname,
	// 			username: uname,
	// 			age,
	// 			email,
	// 			address,
	// 			phone,
	// 			education: edu,
	// 			politicalBackground: party,
	// 			electionArea: area,
	// 			memberSince: member,
	// 			position,
	// 			password,
	// 			slogan,
	// 			description,
	// 			flag,
	// 			profilePhoto,
	// 		},
	// 		config
	// 	);
	// 	if (data) {
	// 		window.location.reload(true);
	// 	}
	// };
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						First Name
					</label>
					<input
						type="text"
						onChange={(e) => setFname(e.target.value)}
						id="fname"
						value={fname}
						placeholder="firstname"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Middle Name
					</label>
					<input
						type="text"
						onChange={(e) => setMname(e.target.value)}
						id="mname"
						value={mname}
						placeholder="middlename"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						lastname
					</label>
					<input
						type="text"
						onChange={(e) => setLastname(e.target.value)}
						id="lname"
						value={lastname}
						placeholder="lastname"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Username
					</label>
					<input
						type="text"
						onChange={(e) => setUname(e.target.value)}
						id="uname"
						value={uname}
						placeholder="username"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						{" "}
						phone
					</label>
					<input
						type="text"
						onChange={(e) => setPhone(e.target.value)}
						id="phone"
						value={phone}
						placeholder="phone no"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						email
					</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						id="email"
						value={email}
						type="email"
						placeholder="email"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">Age</label>
					<input
						type="text"
						onChange={(e) => setAge(e.target.value)}
						id="age"
						value={age}
						placeholder="Age"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Address
					</label>
					<input
						type="text"
						onChange={(e) => setAddress(e.target.value)}
						id="address"
						value={address}
						placeholder="Address"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Political party
					</label>
					<input
						type="text"
						onChange={(e) => setParty(e.target.value)}
						id="party"
						value={party}
						placeholder="party name"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						slogan
					</label>
					<input
						type="text"
						onChange={(e) => setSlogan(e.target.value)}
						id="slogan"
						value={slogan}
						placeholder="slogan"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Education
					</label>
					<input
						type="text"
						onChange={(e) => setEdu(e.target.value)}
						id="education"
						value={edu}
						placeholder="education"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Election Area
					</label>
					<input
						type="text"
						onChange={(e) => setArea(e.target.value)}
						id="area"
						value={area}
						placeholder="Area of election"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Member since
					</label>
					<input
						type="text"
						onChange={(e) => setMember(e.target.value)}
						id="member"
						value={member}
						placeholder="member since"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Position in Party
					</label>
					<input
						type="text"
						onChange={(e) => setPos(e.target.value)}
						id="position"
						value={pos}
						placeholder="party position"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Description
					</label>
					<input
						type="text"
						onChange={(e) => setDescription(e.target.value)}
						id="description"
						value={description}
						placeholder="About"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Flag{" "}
					</label>
					<input
						onChange={(e) => setFlag(e.target.files[0])}
						id="flag"
						// value={flag}
						// placeholder="About"
						type="file"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Photo
					</label>
					<input
						onChange={(e) => setPhoto(e.target.files[0])}
						accept="image/png, image/jpg, image/jpeg"
						id="poto"
						// value={photo}
						// placeholder="photo"
						type="file"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
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
			{/* <form onSubmit={handleSubmit}>
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
						Middle Name
					</label>
					<input
						onChange={(e) => setMname(e.target.value)}
						id="mname"
						defaultValue={mname}
						placeholder="MiddleName"
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
			</form> */}
		</Modelwrapper>
	);
};

export default PersonalUpdate;
