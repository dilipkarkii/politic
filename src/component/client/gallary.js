// import axios from "axios";
import React, { useEffect, useState } from "react";
import Gal from "../model/gal";
import GalUpdate from "../update/Galupdate";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteGallary, listGallary } from "../../actions/GallaryAction";
import {
	GALLARY_DELETE_RESET,
	GALLARY_UPDATE_RESET,
} from "../../constants/GallaryConstants";
import axios from "axios";

const Gallary = () => {
	const dispatch = useDispatch();
	const gallaryList = useSelector((state) => state.gallaryList);
	const { loading, success, gallarys } = gallaryList;
	const gallaryAdd = useSelector((state) => state.gallaryAdd);
	const { success: successAdd } = gallaryAdd;
	const gallaryDelete = useSelector((state) => state.gallaryDelete);
	const { success: successDelete } = gallaryDelete;
	const gallaryUpdate = useSelector((state) => state.gallaryUpdate);
	const { success: successUpdate } = gallaryUpdate;

	useEffect(() => {
		dispatch(listGallary(userId));
		if (successDelete) {
			dispatch({ type: GALLARY_DELETE_RESET });
		}
		if (successAdd || successUpdate) {
			setIsOpen(false);
			setOpenUpdate(false);
		}
		if (successUpdate) {
			dispatch({ type: GALLARY_UPDATE_RESET });
		}
	}, [dispatch, successDelete, successAdd, successUpdate]);

	let [isOpen, setIsOpen] = useState(false);
	let [openUpdate, setOpenUpdate] = useState(false);
	let [gallaryDetail, setGallaryDetail] = useState([]);
	let [gallaryData, setGallaryData] = useState([]);

	const [showModal, setShowModal] = React.useState(false);
	const [showImage, setShowImage] = React.useState();
	// console.log("showimage", showImage);
	// console.log("gallaryDetail", gallaryData[0].image.split("8000/")[1]);

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	console.log(gallaryData);

	function closeModal() {
		setIsOpen(false);
		// setOpenUpdate(false);
	}
	function openModal() {
		setIsOpen(true);
		// setOpenUpdate(true);
	}

	const closeUpdateModal = () => {
		setOpenUpdate(false);
	};

	const onDelete = async (id) => {
		dispatch(deleteGallary(id));
	};

	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />
				{/* <!-- images goes here --> */}
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto">
					<div className="flex items-center justify-between mb-4">
						<h1 className="text-2xl font-bold">Gallary</h1>
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							{"Add Image"}
						</button>
					</div>
					<Gal title="Add image" closeModal={closeModal} isOpen={isOpen} />

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
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
							{gallarys &&
								gallarys.map((images) => (
									<div className="" key={images.id}>
										<div className="grid grid-cols-12 gap-1">
											<div className="relative col-span-10">
												<div className=" bg-no-repeat bg-cover md:w-[100%] md:h-[250px]">
													<img
														src={`http://backend.publicaffairsnepal.com/${
															images.image.split("8000/")[1]
														}`}
														alt="Louvre"
														className="block object-cover w-full h-full rounded-lg "
														// onClick={() => setShowModal(true)}
													/>
												</div>
												<div className="absolute bottom-0 left-0 right-0 w-full h-20 text-base font-semibold text-gray-900 transition duration-300 ease-in-out bg-fixed border-solid opacity-0 hover:opacity-70 border-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
													<p className="px-3 py-2">{images.description}</p>
												</div>
											</div>
											<div className="flex flex-col items-center col-span-2">
												<button
													className=""
													onClick={() => onDelete(images.id)}
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
												<button
													className="my-2"
													// eslint-disable-next-line no-sequences
													onClick={() => (
														setShowModal(true), setShowImage(images)
													)}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-6 h-6"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
														/>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
														/>
													</svg>
												</button>

												<button
													className="my-2 "
													onClick={() => (
														// eslint-disable-next-line no-sequences
														setOpenUpdate(true), setGallaryDetail(images)
													)}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-5 h-5"
														viewBox="0 0 20 20"
														fill="blue"
													>
														<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
														<path
															fillRule="evenodd"
															d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
															clipRule="evenodd"
														/>
													</svg>
												</button>
											</div>

											{/* px-5 bottom-0 pt-20 text-center */}
										</div>
									</div>
								))}
						</div>
					)}
				</div>
			</div>
			<GalUpdate
				title="Update Images"
				closeModal={closeUpdateModal}
				isOpen={openUpdate}
				gallaryDetail={gallaryDetail}
			/>

			{/* <button
					className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
					type="button"
					onClick={() => setShowModal(true)}
				>
					Open regular modal
				</button> */}
			{showModal ? (
				<>
					<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
						<div className="relative w-auto max-w-3xl mx-auto my-6">
							{/*content*/}
							<div
								className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
								style={{ width: "900px" }}
							>
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
									<h3 className="text-3xl font-semibold">
										{showImage.description}
									</h3>
									<button
										className="justify-end px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
										type="button"
										onClick={() => setShowModal(false)}
									>
										X
									</button>
								</div>
								{/*body*/}
								<div
									className="relative flex-auto p-6 "
									style={{ height: "500px", width: "900px" }}
								>
									<img
										src={`http://backend.publicaffairsnepal.com/${
											showImage.image.split("8000/")[1]
										}`}
										alt="Louvre"
										className="block object-cover object-center w-full h-full rounded-lg"
										// onClick={() => setShowModal(true)}
									/>
								</div>
								{/*footer*/}
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default Gallary;
