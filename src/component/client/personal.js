// import axios from "axios";
import React, { useEffect, useState } from "react";
import PersonalProfile from "../model/profilepersonal";
import PersonalUpdate from "../update/PersonalUpdate";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { listPersonal } from "../../actions/PersonalAction";
import { PERSONAL_UPDATE_RESET } from "../../constants/PersonalConstants";

const Personal = () => {
	const dispatch = useDispatch();
	const personalList = useSelector((state) => state.personalList);
	const { loading, success, personals } = personalList;
	const personalUpdate = useSelector((state) => state.personalUpdate);
	const { success: successUpdate } = personalUpdate;

	useEffect(() => {
		dispatch(listPersonal(userId));
		if (successUpdate) {
			setIsOpen(false);
			setOpenUpdate(false);
		}
		if (successUpdate) {
			dispatch({ type: PERSONAL_UPDATE_RESET });
		}
	}, [dispatch, successUpdate]);

	let [isOpen, setIsOpen] = useState(false);
	let [openUpdate, setOpenUpdate] = useState(false);
	// let [personalData, setPersonalData] = useState([]);
	let [personalDetail, setPersonalDetail] = useState();

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;
	console.log("userId", userId);
	console.log("personal", personals);
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

	return (
		<>
			<Navbartop />
			<div className="bg-slate-100">
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto ">
					{/* {personalData.map((value) => ( */}
					<>
						<div className="flex items-start justify-between mb-4">
							<button
								type="button"
								onClick={openModal}
								className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
							>
								{"Upload Manifesto"}
							</button>
							<button
								onClick={() => (
									// eslint-disable-next-line no-sequences
									setOpenUpdate(true), setPersonalDetail(personals)
								)}
								// onClick={() => (setOpenUpdate(true), setEventDetail(personalData))}
								className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
							>
								Update Profile
							</button>
						</div>
						<PersonalProfile
							title="Add FILE"
							closeModal={closeModal}
							isOpen={isOpen}
						/>
						<div className="relative w-auto max-w-3xl mx-auto ">
							{/*content*/}
							<div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-[#fff] focus:outline-none">
								{/*header*/}
								<div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
									<h3 className="text-3xl font-semibold text-gray-500">
										Personal Profile
									</h3>

									<div className="w-12 h-12">
										<img
											src={`http://44.199.61.81:8080/${
												personals && personals.flag.split("8000/")[1]
											}`}
											alt="party flag"
											className="w-full h-full align-middle border-none rounded-full shadow"
										/>
									</div>
								</div>
								{loading ? (
									<div className="w-[85px] m-auto">
										<div className="justify-center animate-spin">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-refresh-cw"
											>
												<polyline points="23 4 23 10 17 10"></polyline>
												<polyline points="1 20 1 14 7 14"></polyline>
												<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
											</svg>
										</div>
									</div>
								) : (
									<div className="relative flex-auto p-6">
										<p className="my-4 text-lg leading-relaxed text-blueGray-500">
											<div className="grid gap-4 md:grid-cols-3">
												<div className="md:col-span-1">
													<img
														src={`http://44.199.61.81:8080/${
															personals &&
															personals.profilePhoto.split("8000/")[1]
														}`}
														alt="Louvre"
														className="block object-cover object-center w-full h-full mr-5 rounded-lg"
														// onClick={() => setShowModal(true)}
													/>
												</div>
												<div className="md:col-span-2">
													<div className="flex ">
														<p className="mr-1">
															Name: {personals && personals.firstName}
														</p>
														<p className="mr-1">
															{personals && personals.middleName === "null"
																? ""
																: personals && personals.middleName}
														</p>
														<p className="mr-1">
															{personals && personals.lastName}
														</p>
													</div>
													<p>Age: {personals && personals.age}</p>
													<p>Address: {personals && personals.address}</p>
													<p>Education: {personals && personals.education}</p>
													<p>
														Political Party:
														{personals && personals.politicalBackground}
													</p>
													<p>
														Election Area: {personals && personals.electionArea}
													</p>
													<p>
														Member Since: {personals && personals.memberSince}
													</p>
													<p>
														Position in Party: {personals && personals.position}
													</p>
												</div>
											</div>
										</p>
									</div>
								)}
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
