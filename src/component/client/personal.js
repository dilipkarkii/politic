import axios from "axios";
import React, { useEffect, useState } from "react";
import PersonalProfile from "../model/profilepersonal";
import PersonalUpdate from "../update/PersonalUpdate";
import Navbartop from "./navbar";

const Personal = () => {
	let [isOpen, setIsOpen] = useState(false);

	let [openUpdate, setOpenUpdate] = useState(false);
	let [personalData, setPersonalData] = useState([]);
	let [personalDetail, setPersonalDetail] = useState();
	console.log(personalDetail);

	const userId = localStorage.getItem("userId");
	console.log("userId", userId);

	console.log("data", personalDetail);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	const closeUpdateModal = () => {
		setOpenUpdate(false);
	};
	console.log("first", personalData);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`http://44.199.61.81/politician/${userId}`);
			setPersonalData(res.data);
			console.log("res", res.data);
		};
		fetchData();
	}, []);

	return (
		<>
			<Navbartop />
			<div className="bg-slate-100">
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto ">
					{/* {personalData.map((value) => ( */}
					<>
						<div
							className="inset-0 flex items-center justify-end "
							// key={personalData.id}
						>
							{/* <button
								type="button"
								onClick={openModal}
								className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
							>
								{"Add profile"}
							</button> */}
							<button
								onClick={() => (
									// eslint-disable-next-line no-sequences
									setOpenUpdate(true), setPersonalDetail(personalData)
								)}
								// onClick={() => (setOpenUpdate(true), setEventDetail(personalData))}
								className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
							>
								Update Profile
							</button>
						</div>
						<PersonalProfile
							title="Add profile"
							closeModal={closeModal}
							isOpen={isOpen}
						/>
						<div className="relative w-auto max-w-3xl mx-auto my-6">
							{/*content*/}
							<div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-green-50 focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
									<h3 className="text-3xl font-semibold text-gray-500">
										Personal Profile
									</h3>

									<div class="w-60 sm:w-4/12 pl-32">
										<img
											src={`http://44.199.61.81/${
												personalData.flag && personalData.flag.split("8000/")[1]
											}`}
											alt="party flag"
											class="shadow rounded-full h-28  align-middle border-none"
										/>
									</div>
								</div>

								<div className="relative flex-auto p-6">
									<p className="my-4 text-lg leading-relaxed text-blueGray-500">
										<div className="grid grid-cols-3">
											<div className="col-span-1 pt-3">
												<img
													src={`http://44.199.61.81/${
														personalData.profilePhoto &&
														personalData.profilePhoto.split("8000/")[1]
													}`}
													alt="Louvre"
													className="block object-cover object-center w-full h-full rounded-lg mr-5"
													// onClick={() => setShowModal(true)}
												/>
											</div>
											<div className="col-span-2 mx-5">
												<div className=" flex">
													<p className="mr-1">Name:{personalData.firstName}</p>
													<p className="mr-1">{personalData.middleName}</p>
													<p className="mr-1"> {personalData.lastName}</p>
												</div>
												<p>Age: {personalData.age}</p>
												<p>Address: {personalData.address}</p>
												<p>Education: {personalData.education}</p>
												<p>
													Political Party: {personalData.politicalBackground}
												</p>
												<p>Election Area: {personalData.electionArea}</p>
												<p>Member Since: {personalData.memberSince}</p>
												<p>Position in Party: {personalData.position}</p>
											</div>
										</div>
									</p>
								</div>
							</div>
							{/*body*/}
						</div>
					</>
					{/* ))} */}
				</div>
			</div>
			<PersonalUpdate
				title="Update Profile"
				closeModal={closeUpdateModal}
				isOpen={openUpdate}
				personalDetail={personalDetail}
			/>
		</>
	);
};

export default Personal;
