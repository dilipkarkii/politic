import axios from "axios";
import React, { useEffect, useState } from "react";
import Personal from "../model/personal";
import Award from "../profilecomponent/Awards";
import AwardUpdate from "../profilecomponent/AwardUpdate";
import ContriUpdate from "../profilecomponent/ContributionUpdate";
import Contribution from "../profilecomponent/Contributions.js";
import ProfileUpdate from "../update/ProfileUpdate";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";

import { listAchivement } from "../../actions/AchivementAction";
import { ACHIVEMENT_UPDATE_RESET } from "../../constants/AchivementConstants";

import { listAward } from "../../actions/AwardAction";
import { AWARD_UPDATE_RESET } from "../../constants/AwardConstants";

import { listContribution } from "../../actions/ContributionAction";
import { CONTRIBUTION_UPDATE_RESET } from "../../constants/ContributionConstants";

const Profile = () => {
	const dispatch = useDispatch();
	// achivement
	const achivementList = useSelector((state) => state.AchivementList);
	const { loading, success, achivements } = achivementList;
	const achivementAdd = useSelector((state) => state.AchivementAdd);
	const { success: successAdd } = achivementAdd;
	const achivementUpdate = useSelector((state) => state.AchivementUpdate);
	const { success: successUpdate } = achivementUpdate;
	const userId = localStorage.getItem("userId");
	useEffect(() => {
		dispatch(listAchivement(userId));

		if (successAdd || successUpdate) {
			setIsOpen(false);
			setOpenUpdate(false);
		}
		if (successUpdate) {
			dispatch({ type: ACHIVEMENT_UPDATE_RESET });
		}
	}, [dispatch, successAdd, successUpdate]);

	// award
	const awardList = useSelector((state) => state.awardList);
	const { loading: awardLoading, success: awardSuccess, awards } = awardList;
	const awardAdd = useSelector((state) => state.awardAdd);
	const { success: successAddAward } = awardAdd;
	const awardUpdate = useSelector((state) => state.awardUpdate);
	const { success: successUpdateAward } = awardUpdate;
	useEffect(() => {
		dispatch(listAward(userId));

		if (successAddAward || successUpdateAward) {
			setIsOpenAward(false);
			setOpenAwardUpdate(false);
		}
		if (successUpdate) {
			dispatch({ type: AWARD_UPDATE_RESET });
		}
	}, [dispatch, successAddAward, successUpdateAward]);

	// contribution
	const contributionList = useSelector((state) => state.contributionList);
	const {
		loading: contributionLoading,
		success: contributionSuccess,
		contributions,
	} = contributionList;
	const contributionAdd = useSelector((state) => state.contributionAdd);
	const { success: successAddcontribution } = contributionAdd;
	const contributionUpdate = useSelector((state) => state.contributionUpdate);
	const { success: successUpdatecontribution } = contributionUpdate;
	useEffect(() => {
		dispatch(listContribution(userId));

		if (successAddcontribution || successUpdatecontribution) {
			setIsOpenContri(false);
			setOpenContriUpdate(false);
		}
		if (successUpdate) {
			dispatch({ type: CONTRIBUTION_UPDATE_RESET });
		}
	}, [dispatch, successAddcontribution, successUpdatecontribution]);

	let [isOpen, setIsOpen] = useState(false);
	let [isOpenAward, setIsOpenAward] = useState(false);
	let [isOpenContri, setIsOpenContri] = useState(false);

	let [openUpdate, setOpenUpdate] = useState(false);
	let [openAwardUpdate, setOpenAwardUpdate] = useState(false);
	let [openContriUpdate, setOpenContriUpdate] = useState(false);

	let [profileDetail, setProfileDetail] = useState();
	let [awardDetail, setAwardDetail] = useState();
	let [contriDetail, setContriDetail] = useState();

	// let [profileData, setProfileData] = useState([]);
	// let [awardData, setAwardData] = useState([]);
	// let [contriData, setContriData] = useState([]);
	console.log(profileDetail);

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
	// 		const { data } = await axios.get(
	// 			`http://44.199.61.81/politician/${userId}/`
	// 		);
	// 		console.log("data", data.politiciancontributions_set);
	// 		setContriData(data.politiciancontributions_set);
	// 	};
	// 	fetchData();
	// }, []);
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
								{loading ? (
									<div class="w-[85px] m-auto">
										<div class=" animate-spin justify-center  ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="feather feather-refresh-cw"
											>
												<polyline points="23 4 23 10 17 10"></polyline>
												<polyline points="1 20 1 14 7 14"></polyline>
												<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
											</svg>
										</div>
									</div>
								) : (
									achivements &&
									achivements.map((value, i) => (
										<div
											className="flex items-center justify-between px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
											style={{ display: "flex" }}
											key={value.id}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 ml-10 text-sm text-justify text-gray-900 sm:mt-0 sm:col-span-2">
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
									))
								)}
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
								{awardLoading ? (
									<div class="w-[85px] m-auto">
										<div class=" animate-spin justify-center  ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="feather feather-refresh-cw"
											>
												<polyline points="23 4 23 10 17 10"></polyline>
												<polyline points="1 20 1 14 7 14"></polyline>
												<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
											</svg>
										</div>
									</div>
								) : (
									awards &&
									awards.map((value, i) => (
										<div
											className="flex items-center justify-between px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
											style={{ display: "flex" }}
											key={value.id}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 ml-10 text-sm text-justify text-gray-900 sm:mt-0 sm:col-span-2">
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
									))
								)}
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
								{contributionLoading ? (
									<div class="w-[85px] m-auto">
										<div class=" animate-spin justify-center  ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="feather feather-refresh-cw"
											>
												<polyline points="23 4 23 10 17 10"></polyline>
												<polyline points="1 20 1 14 7 14"></polyline>
												<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
											</svg>
										</div>
									</div>
								) : (
									contributions &&
									contributions.map((value, i) => (
										<div
											className="flex items-center justify-between px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
											style={{ display: "flex" }}
											key={value.id}
										>
											<dt className="text-sm font-medium text-gray-500 ">
												{i + 1}
											</dt>
											<dd className="mt-1 ml-10 text-sm text-justify text-gray-900 sm:mt-0 sm:col-span-2">
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
									))
								)}
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
