import React, { useEffect, useState } from "react";
import Gal from "../model/gal";
import Dashnav from "./Dashnav";
// import axios from "axios";
import Navbartop from "./navbar";

const Dashgall = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	// const url = "http://192.168.1.106:8000/api/registeradmin";

	// const [des, setDes] = useState("");

	// const [pic, setPic] = useState();
	// const [data, setData] = useState([]);
	// let [isOpen, setIsOpen] = useState(false);

	// function closeModal() {
	// 	setIsOpen(false);
	// }

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
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);
	console.log("data", data);
	return (
		<>
			<div className="bg-slate-300">
				<Dashnav />
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
						{data.slice(0, 10).map((datas) => (
							<div className="">
								<div className="relative max-w-xs bg-no-repeat bg-cover">
									<img
										src={datas.url}
										alt="Louvre"
										className="block object-cover object-center w-full h-full rounded-lg"
									/>
									{/* px-5 bottom-0 pt-20 text-center */}
									<div className="absolute top-0 left-0 right-0 block w-full h-full text-sm font-semibold text-gray-900 transition duration-300 ease-in-out bg-fixed border-solid rounded-lg opacity-0 hover:opacity-100 border-1 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
										<button className="hover:bg-red-900">
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
										<p className="bottom-0 px-5 pt-20 text-center">
											{datas.title}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashgall;
