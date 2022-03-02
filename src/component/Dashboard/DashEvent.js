import axios from "axios";
import React, { useEffect, useState } from "react";
import Even from "../model/even";
import EventUpdate from "../model/EventUpdate";
import Dashnav from "./Dashnav";
const DashEvent = () => {
	let [isOpen, setIsOpen] = useState(false);
	let [eventsData, setEventsData] = useState([]);
	let [openUpdate, setOpenUpdate] = useState(false);
	let [eventDetail, setEventDetail] = useState();

	console.log(eventDetail);

	function closeModal() {
		setIsOpen(false);
		setOpenUpdate(false);
	}
	function openModal() {
		setIsOpen(true);
		setOpenUpdate(true);
	}

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("http://politician.tk/event/");
			setEventsData(res.data);
		};
		fetchData();
	}, []);
	const onDelete = async (id) => {
		await axios.delete(`http://politician.tk/event/${id}`);
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
							{"Add Event"}
						</button>
					</div>
					<Even title="Add Events" closeModal={closeModal} isOpen={isOpen} />
					{eventsData &&
						eventsData.map((value) => (
							<div className="mx-3 my-4 overflow-hidden bg-white shadow sm:rounded-lg ">
								<div className="grid grid-cols-12 px-4 py-5 sm:px-6 bg-gray-50">
									<h3 className="flex items-center col-span-4 text-lg font-medium leading-6 text-gray-500 ">
										Upcomming Events
									</h3>
									<div className="flex items-center justify-end col-span-8 ">
										<button
											onClick={() => onDelete(value.id)}
											className="items-center px-3 py-2 mr-2 text-white bg-red-500 rounded"
										>
											Delete
										</button>
										<button
											onClick={() => (
												setOpenUpdate(true), setEventDetail(value)
											)}
											className="items-center px-3 py-2 text-white bg-blue-500 rounded"
										>
											Update
										</button>
									</div>
								</div>
								<div className="border-t border-gray-200">
									<dl>
										<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt className="text-sm font-medium text-gray-500">
												Campaign name
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{value.title}
											</dd>
										</div>
										<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt className="text-sm font-medium text-gray-500">
												Agenda of event
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{value.description}
											</dd>
										</div>
										<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt className="text-sm font-medium text-gray-500">
												Location
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{value.location}
											</dd>
										</div>
										<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt className="text-sm font-medium text-gray-500">
												Date
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{value.date}
											</dd>
										</div>
										<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt className="text-sm font-medium text-gray-500">
												Time
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{value.time}
											</dd>
										</div>
										<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt className="text-sm font-medium text-gray-500">
												Links
											</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												<a href="www.facebook.com" target="_blank">
													{value.link}
												</a>
											</dd>
										</div>
									</dl>
								</div>
							</div>
						))}
				</div>
				<EventUpdate
					title="Update Events"
					closeModal={closeModal}
					isOpen={openUpdate}
					eventDetail={eventDetail}
				/>
			</div>
		</>
	);
};

export default DashEvent;
