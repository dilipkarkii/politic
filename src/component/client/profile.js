import axios from "axios";
import React, { useEffect, useState } from "react";
import Personal from "../model/personal";
import Award from "../profilecomponent/Awards";
import AwardUpdate from "../profilecomponent/AwardUpdate";
import ContriUpdate from "../profilecomponent/ContributionUpdate";
import Contribution from "../profilecomponent/Contributions.js";
import ProfileUpdate from "../update/ProfileUpdate";
import Navbartop from "./navbar";

const Profile = () => {
	let [isOpen, setIsOpen] = useState(false);
	let [isOpenAward, setIsOpenAward] = useState(false);
	let [isOpenContri, setIsOpenContri] = useState(false);

	let [openUpdate, setOpenUpdate] = useState(false);
	let [openAwardUpdate, setOpenAwardUpdate] = useState(false);
	let [openContriUpdate, setOpenContriUpdate] = useState(false);

	let [profileDetail, setProfileDetail] = useState();
	let [awardDetail, setAwardDetail] = useState();
	let [contriDetail, setContriDetail] = useState();

	let [profileData, setProfileData] = useState([]);
	let [awardData, setAwardData] = useState([]);
	let [contriData, setContriData] = useState([]);
	console.log(profileDetail);
	const userId = localStorage.getItem("userId");

	console.log(profileData);
	//close model
	function closeModal() {
		setIsOpen(false);
	}
	function closeAwardModal() {
		setIsOpenAward(false);
	}
	function closeContriModal() {
		setIsOpenContri(false);
	}

	// close model

	// open model
	function openModal() {
		setIsOpen(true);
	}
	function openAwardModal() {
		setIsOpenAward(true);
	}
	function openContriModal() {
		setIsOpenContri(true);
	}
	// open model

	// update open
	const openUpdateModal = () => {
		setOpenUpdate(true);
	};
	const openAwardUpdateModal = () => {
		setOpenAwardUpdate(true);
	};
	const openContriUpdateModal = () => {
		setOpenContriUpdate(true);
	};
	// update open

	// update close
	const closeUpdateModal = () => {
		setOpenUpdate(false);
	};
	const closeAwardUpdateModal = () => {
		setOpenAwardUpdate(false);
	};
	const closeContriUpdateModal = () => {
		setOpenContriUpdate(false);
	};
	// update close

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		// const res = await axios.get("http://44.199.61.81/profile/");
	// 		const { data } = await axios.get(
	// 			`http://44.199.61.81/politician/${userId}/`
	// 		);
	// 		console.log("resUser", data.politicianpersonalprofile_set);
	// 		setProfileData(data.politicianpersonalprofile_set);
	// 	};
	// 	fetchData();
	// }, []);

	// api call
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://44.199.61.81/politician/${userId}/`
			);
			console.log("data", data.politicianachievements_set);
			setProfileData(data.politicianachievements_set);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://44.199.61.81/politician/${userId}/`
			);
			console.log("data", data.politicianawards_set);
			setAwardData(data.politicianawards_set);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://44.199.61.81/politician/${userId}/`
			);
			console.log("data", data.politiciancontributions_set);
			setContriData(data.politiciancontributions_set);
		};
		fetchData();
	}, []);
	// api call end
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
						title="Add Awards"
						closeModal={closeAwardModal}
						isOpen={isOpenAward}
					/>
					<Contribution
						title="Add Contribution"
						closeModal={closeContriModal}
						isOpen={isOpenContri}
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
											key={value.id}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-10 text-justify">
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
									onClick={openAwardModal}
									className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
								>
									Create Awards
								</button>
							</div>
						</div>
						<div className="border-t border-gray-200">
							<dl>
								{awardData &&
									awardData.map((value, i) => (
										<div
											className="flex items-center justify-between px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
											style={{ display: "flex" }}
											key={value.id}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-10 text-justify">
												{value.awards}
											</dd>
											<button
												onClick={() => (
													// eslint-disable-next-line no-sequences
													openAwardUpdateModal(), setAwardDetail(value)
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
									onClick={openContriModal}
									className="px-4 py-2 ml-4 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
								>
									Create Contribution
								</button>
							</div>
						</div>
						<div className="border-t border-gray-200">
							<dl>
								{contriData &&
									contriData.map((value, i) => (
										<div
											className="flex items-center justify-between px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
											style={{ display: "flex" }}
											key={value.id}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-10 text-justify">
												{value.contributions}
											</dd>
											<button
												onClick={() => (
													// eslint-disable-next-line no-sequences
													openContriUpdateModal(), setContriDetail(value)
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
			<AwardUpdate
				title="Update achivements"
				closeModal={closeAwardUpdateModal}
				isOpen={openAwardUpdate}
				awardDetail={awardDetail}
			/>
			<ContriUpdate
				title="Update achivements"
				closeModal={closeContriUpdateModal}
				isOpen={openContriUpdate}
				contriDetail={contriDetail}
			/>

			{/* update open models end */}
		</>
	);
};

export default Profile;
