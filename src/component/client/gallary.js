import axios from "axios";
import React, { useEffect, useState } from "react";
import Gal from "../model/gal";
import GalUpdate from "../update/Galupdate";
import Navbartop from "./navbar";
// import image from "../../img.png";

const Gallary = () => {
	let [isOpen, setIsOpen] = useState(false);

	let [openUpdate, setOpenUpdate] = useState(false);
	let [gallaryDetail, setGallaryDetail] = useState([]);
	let [gallaryData, setGallaryData] = useState([]);
	// console.log("gallaryDetail", gallaryData[0].image.split("8000/")[1]);

	const userId = localStorage.getItem("userId");

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

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("http://politician.tk/gallery/");
			setGallaryData(res.data);
		};
		fetchData();
	}, []);
	const onDelete = async (id) => {
		await axios.delete(`http://politician.tk/gallery/${id}/`);
	};

	// function openModal() {
	// 	setIsOpen(true);
	// }
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	console.log(des, pic);
	// 	let config = {
	// 		headers: {
	// 			"Content-Type": "multipart/form-data",
	// 			Accept: "application/json",
	// 			type: "formData",
	// 		},
	// 	};
	// 	await axios.post(url, { des, pic }, config);
	// };

	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />
				{/* <!-- images goes here --> */}
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto">
					<div className="inset-0 flex items-center justify-end ">
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							{"Add Image"}
						</button>
					</div>
					<Gal title="Add image" closeModal={closeModal} isOpen={isOpen} />
					<div className="grid grid-cols-4 gap-4 mt-5">
						{gallaryData.map((images) => (
							<div className="" key={images.id}>
								<div className="relative max-w-xs bg-no-repeat bg-cover">
									<img
										src={`http://politician.tk/${
											images.image.split("8000/")[1]
										}`}
										alt="Louvre"
										className="block object-cover object-center w-full h-full rounded-lg"
									/>
									{/* px-5 bottom-0 pt-20 text-center */}
									<div className="absolute top-0 left-0 right-0 block w-full h-full text-sm font-semibold text-gray-900 transition duration-300 ease-in-out bg-fixed border-solid rounded-lg opacity-0 hover:opacity-100 border-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
										<button
											className="hover:bg-red-900"
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
											className="mx-2 my-2 hover:bg-blue-900"
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
										<p className="bottom-0 px-5 pt-20 text-center">
											{images.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<GalUpdate
				title="Update Images"
				closeModal={closeUpdateModal}
				isOpen={openUpdate}
				gallaryDetail={gallaryDetail}
			/>
		</>
	);
};

export default Gallary;
