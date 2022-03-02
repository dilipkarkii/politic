import axios from "axios";
import React, { useEffect, useState } from "react";
import Planmodel from "../model/plan";
import Dashnav from "./Dashnav";
import Navbartop from "./navbar";

const Dashplan = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/comments")
			.then((getData) => {
				setApiData(getData.data);
			});
	}, []);
	const getData = () => {
		axios
			.get(`https://jsonplaceholder.typicode.com/comments`)
			.then((getData) => {
				setApiData(getData.data);
			});
	};

	const onDelete = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
			.then(() => {
				getData();
			});
	};
	return (
		<>
			<div className="bg-slate-300">
				<Dashnav />
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto">
					<div className="inset-0 flex items-center justify-end ">
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							{"Add plans"}
						</button>
					</div>
					<Planmodel
						title="Add Plans"
						closeModal={closeModal}
						isOpen={isOpen}
					/>
					<div className="mx-3 my-4 overflow-hidden shadow bg-green-50 sm:rounded-lg ">
						<div className="px-4 py-5 sm:px-6">
							<h3 className="text-lg font-medium leading-6 text-gray-500">
								Plans for future
							</h3>
							{/* <p className="max-w-2xl mt-1 text-sm text-gray-500">
							Personal details and application.
						</p> */}
						</div>

						{apiData.slice(0, 5).map((data) => (
							<div className="border-t border-gray-200 ">
								<div className="grid grid-cols-12 px-4 py-5 bg-green-50 ">
									<div className="col-span-2">Plan {data.id} </div>
									<div className="col-span-8 mr-5 text-justify">
										{data.body}{" "}
									</div>
									<div className="flex items-center justify-center col-span-2 align-center">
										<button
											onClick={() => onDelete(data.id)}
											className="items-center px-3 py-2 mr-2 text-white bg-red-500 rounded"
										>
											Delete
										</button>{" "}
										<button
											onClick={() => onDelete(data.id)}
											className="items-center px-3 py-2 text-white bg-blue-500 rounded"
										>
											Update
										</button>{" "}
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

export default Dashplan;
