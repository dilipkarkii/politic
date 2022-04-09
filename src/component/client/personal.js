import React, { useEffect, useState } from "react";
import PersonalProfile from "../model/profilepersonal";
import PersonalUpdate from "../update/PersonalUpdate";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import {
	listPersonal,
	deleteManifesto,
	// listManifesto,
} from "../../actions/PersonalAction";
import {
	PERSONAL_UPDATE_RESET,
	PROFILEPHOTO_UPDATE_RESET,
	MANIFESTO_DELETE_RESET,
	MANIFESTO_ADD_RESET,
} from "../../constants/PersonalConstants";
import axios from "axios";
import Profilephoto from "../update/Profilepicture";

const Personal = () => {
	const dispatch = useDispatch();

	const personalList = useSelector((state) => state.personalList);
	const { loading, success, personals } = personalList;
	const personalUpdate = useSelector((state) => state.personalUpdate);
	const { success: successUpdate } = personalUpdate;
	const profilephotoUpdate = useSelector((state) => state.profilephotoUpdate);
	const { success: successphotoUpdate } = profilephotoUpdate;
	const manifestoDelete = useSelector((state) => state.manifestoDelete);
	const { success: successDelete } = manifestoDelete;
	const manifestoAdd = useSelector((state) => state.manifestoAdd);
	const { success: successAddManifesto, iserror } = manifestoAdd;

	let [isOpen, setIsOpen] = useState(false);
	let [isOpenphoto, setIsOpenphoto] = useState(false);
	let [openUpdate, setOpenUpdate] = useState(false);
	let [personalDetail, setPersonalDetail] = useState();
	let [manifesto, setManifesto] = useState([]);

	useEffect(() => {
		dispatch(listPersonal(userId));
		if (successUpdate) {
			setIsOpen(false);
			setOpenUpdate(false);
		}
		if (successphotoUpdate) {
			setIsOpenphoto(false);
		}
		if (successDelete) {
			dispatch({ type: MANIFESTO_DELETE_RESET });
		}
		if (successUpdate) {
			dispatch({ type: PERSONAL_UPDATE_RESET });
		}
		if (successAddManifesto) {
			dispatch({ type: MANIFESTO_ADD_RESET });
			setIsOpen(false);
		}
		if (iserror) {
			setIsOpen(false);
		}
		if (successAddManifesto) {
			setIsOpen(false);
		}
	}, [
		dispatch,
		successUpdate,
		successDelete,
		successAddManifesto,
		iserror,
		successphotoUpdate,
	]);

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	function openphotoModal() {
		setIsOpenphoto(true);
	}
	const closeUpdateModal = () => {
		setOpenUpdate(false);
	};
	const closephotoModal = () => {
		setIsOpenphoto(false);
	};

	const onDelete = async (id) => {
		dispatch(deleteManifesto(id));
	};

	const [manifestodata, setManifestodata] = useState();

	const showdata = () => {};

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://backend.publicaffairsnepal.com/manifesto/`
			);
			const result = data.results.filter(
				(value) => value.politician === userId
			);
			console.log("datamenkjdlkjdf", data);
			setManifestodata(result[0]);
			setManifesto(data);
		};
		fetchData();
	}, [successDelete, successAddManifesto]);

	console.log("manifesto", manifestodata);

	return (
		<>
			<Navbartop />
			<div className="bg-slate-100">
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto ">
					{/* {personalData.map((value) => ( */}
					<>
						<div className="flex items-start justify-between ">
							<div className="flex justify-center">
								{manifestodata && (
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 mt-1 mr-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
											/>
										</svg>
									</div>
								)}

								<button
									type="button"
									onClick={openModal}
									className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
								>
									{"Upload Manifesto"}
								</button>

								<button
									className="ml-3"
									onClick={() => onDelete(manifestodata.id)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 "
										fill="none"
										viewBox="0 0 24 24"
										stroke="red"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</button>
							</div>
							<button
								type="button"
								onClick={openphotoModal}
								className="px-2 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 "
							>
								{"Upload Profile picture"}
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
						<Profilephoto
							title="update Profile Photo"
							closeModal={closephotoModal}
							isOpen={isOpenphoto}
						/>
						<div className="relative w-auto max-w-3xl mx-auto ">
							{/*content*/}
							<div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg mt-5 outline-none bg-[#fff] focus:outline-none">
								{/*header*/}
								<div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
									<h3 className="text-3xl font-semibold text-gray-500">
										Personal Profile
									</h3>

									<div className="w-12 h-12">
										<img
											src={`http://backend.publicaffairsnepal.com/${
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
														src={`http://backend.publicaffairsnepal.com/${
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
														Political Party: &nbsp;
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
