import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addPersonal } from "../../actions/PersonalAction";
import { PERSONAL_ADD_RESET } from "../../constants/PersonalConstants";
const Create = ({ title, closeModal, isOpen }) => {
	const dispatch = useDispatch();
	const personalAdd = useSelector((state) => state.personalAdd);
	const { success: successAdd } = personalAdd;

	const [fname, setFname] = useState();
	const [upass, setUpass] = useState("");
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

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addPersonal(
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
				upass,
				slogan,
				party,
				description,
				flag,
				photo,
				member
			)
		);
	};

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: PERSONAL_ADD_RESET });
			setFname("");
			setLastname("");
			setAge("");
			setUname("");
			setEmail("");
			setPhone("");
			setAddress("");
			setEdu("");
			setParty("");
			setArea("");
			setPos("");
			setMember("");
			setUpass("");
			setSlogan("");
			setDescription("");
			setFlag("");
			setPhoto("");
		}
	}, [successAdd]);

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
						required
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
						Lastname
					</label>
					<input
						type="text"
						onChange={(e) => setLastname(e.target.value)}
						id="lname"
						value={lastname}
						required
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
						required
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						phone
					</label>
					<input
						onChange={(e) => setPhone(e.target.value)}
						type="tel"
						id="phone"
						name="phone"
						pattern="[0-9]{10}"
						required
						placeholder="please enter only 10 no "
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						id="email"
						value={email}
						type="email"
						placeholder="email"
						required
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">Age</label>
					<input
						type="number"
						onChange={(e) => setAge(e.target.value)}
						id="age"
						value={age}
						placeholder="Age"
						required
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
						required
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
						required
						placeholder="party name"
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Slogan
					</label>
					<input
						type="text"
						onChange={(e) => setSlogan(e.target.value)}
						id="slogan"
						value={slogan}
						placeholder="slogan"
						required
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
						required
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
						required
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Member since
					</label>
					<input
						type="date"
						onChange={(e) => setMember(e.target.value)}
						id="member"
						value={member}
						placeholder="member since"
						required
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
						required
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
						required
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm h-44 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Flag
					</label>
					<input
						onChange={(e) => setFlag(e.target.files[0])}
						id="flag"
						// value={flag}
						// placeholder="About"
						type="file"
						required
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
						required
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				<div className="mt-5 ">
					<label className="block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						className="w-full h-16 px-3 py-1 border-2 rounded-md resize-y border-slate-900 placeholder:text-black"
						onChange={(e) => setUpass(e.target.value)}
						id="password	"
						value={upass}
						required
						placeholder="Set password"
						type="password"
					/>
					<br />
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

// const userId = localStorage.getItem("userId");
// const handleSubmit = async (e) => {
// 	e.preventDefault();
// console.log(uname, upass, email, phone);
// let config = {
// 	headers: {
// 		"Content-Type": "multipart/form-data",
// 		Accept: "application/json",
// 		// type: "formData",
// 	},
// };

// let formData = new FormData();
// formData.append("flag", flag);
// formData.append("firstName", fname);
// formData.append("middleName", mname);
// formData.append("lastName", lastname);
// formData.append("password", upass);
// formData.append("age", age);
// formData.append("username", uname);
// formData.append("email", email);
// formData.append("phone", phone);
// formData.append("address", address);
// formData.append("education", edu);
// formData.append("description", description);
// formData.append("politicalBackground", party);
// formData.append("electionArea", area);
// formData.append("memberSince", member);
// formData.append("position", pos);
// formData.append("slogan", slogan);
// formData.append("profilePhoto", photo);

// 	const { data } = await axios.post(
// 		url,
// 		formData
// 		// {
// 		// 	firstName: uname,
// 		// 	lastName: lastname,
// 		// 	password: upass,
// 		// 	age,
// 		// 	userName: uname,
// 		// 	email,
// 		// 	phone,
// 		// 	address,
// 		// 	education: edu,
// 		// 	description,
// 		// 	politicalBackground: party,
// 		// 	electionArea: area,
// 		// 	memberSince: member,
// 		// 	position: pos,
// 		// 	slogan,
// 		// 	formData,
// 		// }
// 		// config
// 	);
// 	if (data) {
// 		window.location.reload(true);
// 	}
// };
