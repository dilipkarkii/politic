// import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Gal from "../model/gal";
// import Modelwrapper from "../model/modelwrapper";
// import axios from "axios";
import Navbartop from "./navbar";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";

const Gallary = () => {
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
			<Navbartop />
			{/* <!-- images goes here --> */}
			<div class="py-20  h-full  p-3 max-w-6xl mx-auto px-4">
				{/* <>
					<div className="inset-0 flex items-center justify-end ">
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							Add Image
						</button>
					</div>

					<Transition appear show={isOpen} as={Fragment}>
						<Dialog
							as="div"
							className="fixed inset-0 z-10 overflow-y-auto"
							onClose={closeModal}
						>
							<div className="min-h-screen px-4 text-center">
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Dialog.Overlay className="fixed inset-0" />
								</Transition.Child>

								{/* This element is to trick the browser into centering the modal contents. */}
				{/* <span
									className="inline-block h-screen align-middle"
									aria-hidden="true"
								>
									&#8203;
								</span>
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
										<Dialog.Title
											as="h3"
											className="text-lg font-medium leading-6 text-gray-900"
										>
											Add Image
										</Dialog.Title>
										<form onSubmit={handleSubmit}>
											<div className="mt-2 w-fit">
												<textarea
													class="resize-y rounded-md border-2 border-slate-900 w-96 h-16"
													onChange={(e) => setDes(e.target.value)}
													id="name"
													value={des}
													placeholder="Set description"
													type="text"
												/>
											</div>

											<div className="mt-4">
												<input
													onChange={(e) => setPic(e.target.value)}
													id="name"
													value={pic}
													placeholder="name"
													type="file"
													multiple
												/>
												<br />
												<button
													type="submit"
													// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
													className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
													onClick={closeModal}
												>
													submit
												</button>
											</div>
										</form>
									</div>
								</Transition.Child>
							</div>
						</Dialog>
					</Transition>
				</> */}
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
						<div class="">
							<div class="relative  bg-no-repeat bg-cover max-w-xs">
								<img
									src={datas.url}
									alt="Louvre"
									class="block object-cover object-center w-full h-full rounded-lg"
								/>
								<p class="absolute top-0 right-0 px-5 bottom-0 pt-20 text-center left-0 w-full h-full  bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out border-solid border-1 block text-sm font-semibold text-gray-900 rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
									{datas.title}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Gallary;
