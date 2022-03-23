import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Even from "../model/even";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../actions/EventAction";
import { EVENT_ADD_RESET } from "../../constants/EventConstants";

const EventHome = () => {
	const dispatch = useDispatch();
	let [isOpen, setIsOpen] = useState(false);

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	const eventList = useSelector((state) => state.eventList);
	const { loading, success, events } = eventList;
	const eventAdd = useSelector((state) => state.eventAdd);
	const { success: successAdd } = eventAdd;

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}

	useEffect(() => {
		dispatch(listEvent(userId));
		if (successAdd) {
			setIsOpen(false);
		}

		dispatch({ type: EVENT_ADD_RESET });
	}, [successAdd]);

	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />
				<div className="max-w-6xl p-3 px-4 py-20 mx-auto bg-slate-300">
					<div className="flex items-center justify-between mb-4">
						<h1 className="text-2xl font-bold">Events</h1>
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							{"Add Events"}
						</button>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
						{events &&
							events.map((data) => (
								<div
									key={data.id}
									className="bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
								>
									<img
										className="w-full h-32 rounded-t-lg"
										src={`http://44.199.61.81:8080/${
											data.image.split("8000/")[1]
										}`}
										alt=""
									/>

									<div className="px-4 py-4">
										<h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
											{/* {data.title.slice(0, 30)} */}
											{data.title.length > 24
												? data.title.substring(0, 21) + "..."
												: data.title}
										</h5>

										<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
											{/* {data.description.slice(0, 10)} */}
											{data.description.length > 81
												? data.description.substring(0, 80) + "..."
												: data.description}
										</p>
										<div className="flex justify-between">
											<Link to={`/eventdetail/${data.id}`}>
												<button className="inline-flex items-start px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
													Read more
													<svg
														className="w-4 h-4 ml-2 -mr-1"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
															clipRule="evenodd"
														></path>
													</svg>
												</button>
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<Even title="Add Events" closeModal={closeModal} isOpen={isOpen} />
		</>
	);
};

export default EventHome;
