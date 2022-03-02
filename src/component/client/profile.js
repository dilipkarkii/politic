import axios from "axios";
import React, { useEffect, useState } from "react";
import Personal from "../model/personal";
import Award from "../profilecomponent/Awards";
import AwardUpdate from "../profilecomponent/AwardUpdate";
import ContriUpdate from "../profilecomponent/Contribution";
import Contribution from "../profilecomponent/ContriUpdate.js";
import ProfileUpdate from "../update/ProfileUpdate";
import Navbartop from "./navbar";

const Profile = () => {
	let [isOpen, setIsOpen] = useState(false);

	let [openUpdate, setOpenUpdate] = useState(false);
	let [openaward, setOpenAward] = useState(false);
	let [opencontri, setOpenContri] = useState(false);
	let [openAwardUpdate, setOpenAwardUpdate] = useState(false);
	let [openContriUpdate, setOpenContriUpdate] = useState(false);
	let [profileDetail, setProfileDetail] = useState();
	let [profileData, setProfileData] = useState([]);
	console.log(profileDetail);
	const userId = localStorage.getItem("userId");

	console.log(profileData);
	//close model
	function closeModal() {
		setIsOpen(false);
	}
	function closeAward() {
		setOpenAward(false);
	}
	function closeContribution() {
		setOpenContri(false);
	}
	// close model

	// open model
	function openModal() {
		setIsOpen(true);
	}
	function openAwardModal1() {
		setOpenAward(true);
	}
	function openContribution() {
		setOpenContri(true);
	}
	// open model

	// update open
	const openAwardModal = () => {
		setOpenAwardUpdate(true);
	};
	const openContriModal = () => {
		setOpenContriUpdate(true);
	};
	const openUpdateModal = () => {
		setOpenUpdate(true);
	};
	// update open

	// update close
	const closeUpdateModal = () => {
		setOpenUpdate(false);
	};
	const closeUpdateAward = () => {
		setOpenAwardUpdate(false);
	};
	const closeUpdateContri = () => {
		setOpenContriUpdate(false);
	};
	// update close

	useEffect(() => {
		const fetchData = async () => {
			// const res = await axios.get("http://politician.tk/profile/");
			const { data } = await axios.get(
				`http://politician.tk/politician/${userId}/`
			);
			console.log("resUser", data.politicianpersonalprofile_set);
			setProfileData(data.politicianpersonalprofile_set);
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />
				<div className="h-full max-w-6xl p-40 px-4 pt-20 mx-auto">
					{/* open model start */}
					<Personal
						title="Add Achivements"
						closeModal={closeModal}
						isOpen={isOpen}
					/>
					<Award
						title="Add Achivements"
						closeModal={closeAward}
						isOpen={openaward}
					/>
					<Contribution
						title="Add Achivements"
						closeModal={closeContribution}
						isOpen={openContribution}
					/>

					{/* end open model */}
					{/* Achievements */}
					<div className="mx-3 my-4 overflow-hidden bg-white shadow sm:rounded-lg ">
						<div className="flex items-center justify-between px-4 py-5 sm:px-6">
							<h3 className="text-lg font-medium leading-6 text-gray-500 ">
								Achivements
							</h3>
							<div className="inset-0 flex items-center justify-end ">
								<button
									type="button"
									onClick={openModal}
									className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
								>
									Create Achivements
								</button>
							</div>
						</div>
						<div className="border-t border-gray-200">
							<dl>
								{profileData &&
									profileData.map((value, i) => (
										<div
											className="flex items-center justify-between px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
											style={{ display: "flex" }}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{value.achievements}
											</dd>
											<button
												onClick={() => (
													// eslint-disable-next-line no-sequences
													openUpdateModal(), setProfileDetail(value)
												)}
												className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
											>
												Update
											</button>
										</div>
									))}
							</dl>
						</div>
					</div>
					{/* Achievements End */}

					{/* award */}
					<div className="mx-3 my-4 overflow-hidden bg-white shadow sm:rounded-lg ">
						<div className="flex items-center justify-between px-4 py-5 sm:px-6">
							<h3 className="text-lg font-medium leading-6 text-gray-500 ">
								Awards
							</h3>
							<div className="inset-0 flex items-center justify-end ">
								<button
									type="button"
									onClick={openAwardModal1}
									className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
								>
									Create Awards
								</button>
							</div>
						</div>
						<div className="border-t border-gray-200">
							<dl>
								{profileData &&
									profileData.map((value, i) => (
										<div
											className="flex items-center justify-between px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
											style={{ display: "flex" }}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{value.awards}
											</dd>
											<button
												onClick={() => (
													// eslint-disable-next-line no-sequences
													openAwardModal(), setProfileDetail(value)
												)}
												className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
											>
												Update
											</button>
										</div>
									))}
							</dl>
						</div>
					</div>
					{/* award end  */}

					{/* contribution start */}
					<div className="mx-3 my-4 overflow-hidden bg-white shadow sm:rounded-lg ">
						<div className="flex items-center justify-between px-4 py-5 sm:px-6">
							<h3 className="text-lg font-medium leading-6 text-gray-500 ">
								Major Contribution
							</h3>
							<div className="inset-0 flex items-center justify-end ">
								<button
									type="button"
									onClick={openContribution}
									className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
								>
									Create Contribution
								</button>
							</div>
						</div>
						<div className="border-t border-gray-200">
							<dl>
								{profileData &&
									profileData.map((value, i) => (
										<div
											className="flex items-center justify-between px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
											style={{ display: "flex" }}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{value.contribution}
											</dd>
											<button
												onClick={() => (
													// eslint-disable-next-line no-sequences
													openContriModal(), setProfileDetail(value)
												)}
												className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
											>
												Update
											</button>
										</div>
									))}
							</dl>
						</div>
					</div>
					{/* contribution end */}
				</div>
				{/* ))} */}
			</div>

			{/* update open models */}
			<ProfileUpdate
				title="Update achivements"
				closeModal={closeUpdateModal}
				isOpen={openUpdate}
				profileDetail={profileDetail}
			/>
			{/* <AwardUpdate
				title="Update awards"
				closeModal={closeUpdateAward}
				isOpen={openAwardUpdate}
				profileDetail={profileDetail}
			/>
			<ContriUpdate
				title="Update contribution"
				closeModal={closeUpdateContri}
				isOpen={openContriUpdate}
				profileDetail={profileDetail}
			/> */}
			{/* update open models end */}
		</>
	);
};

export default Profile;
