import React, { useEffect, useState } from "react";
import Even from "../model/even";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EventUpdate from "../model/EventUpdate";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { listEvent, deleteEvent } from "../../actions/EventAction";
import {
	EVENT_DELETE_RESET,
	EVENT_UPDATE_RESET,
} from "../../constants/EventConstants";
import moment from "moment";
import axios from "axios";

const Events = () => {
	let { id } = useParams();
	console.log(id);

	const dispatch = useDispatch();
	const eventList = useSelector((state) => state.eventList);
	const { loading, success, events } = eventList;
	const eventAdd = useSelector((state) => state.eventAdd);
	const { success: successAdd } = eventAdd;
	const eventDelete = useSelector((state) => state.eventDelete);
	const { success: successDelete } = eventDelete;
	const eventUpdate = useSelector((state) => state.eventUpdate);
	const { success: successUpdate } = eventUpdate;
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	let [isOpen, setIsOpen] = useState(false);
	let [eventsData, setEventsData] = useState([]);
	let [openUpdate, setOpenUpdate] = useState(false);
	let [eventDetail, setEventDetail] = useState();
	console.log(eventDetail);
	console.log(eventsData);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	const closeUpdateModal = () => {
		setOpenUpdate(false);
	};

	console.log("first", events);

	useEffect(() => {
		dispatch(listEvent(userId));
		if (successDelete) {
			dispatch({ type: EVENT_DELETE_RESET });
		}
		if (successAdd || successUpdate) {
			setIsOpen(false);
			setOpenUpdate(false);
		}
		if (successUpdate) {
			dispatch({ type: EVENT_UPDATE_RESET });
		}
		if (successDelete) {
			navigate("/event");
		}
	}, [dispatch, successDelete, successAdd, successUpdate]);

	const navigate = useNavigate();
	const onDelete = async (id) => {
		dispatch(deleteEvent(id));
	};

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://backend.publicaffairsnepal.com/event/${id}/`
			);
			console.log("data", data);
			setEventsData(data);
		};
		fetchData();
	}, [id]);
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
							{"Add Event"}
						</button>
					</div>

					{/* {loading && <h1 className="text-4xl">Loading</h1>} */}
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
						// events && events((value) => (
						<div
							className="mb-6 overflow-hidden bg-white shadow sm:rounded-lg"
							// key={value.id}
						>
							<div className="grid gap-4 px-4 py-5 md:grid-cols-12 sm:px-6 bg-gray-50">
								<h3 className="flex items-center text-lg font-medium leading-6 text-gray-500 md:col-span-4 ">
									Upcomming Events :
									{moment(eventsData && eventsData.date).format("MMMM Do YYYY")}
								</h3>
								<div className="flex items-center md:justify-end md:col-span-8 ">
									<button
										onClick={() => onDelete(eventsData.id)}
										className="items-center px-3 py-2 mr-2 text-white bg-red-500 rounded"
									>
										Delete
									</button>
									<button
										onClick={() => (
											// eslint-disable-next-line no-sequences
											setOpenUpdate(true), setEventDetail(eventsData)
										)}
										className="items-center px-3 py-2 text-white bg-blue-500 rounded"
									>
										Update
									</button>
								</div>
							</div>
							<div className="border-t border-gray-200">
								<dl>
									<div className="">
										<dd className="w-full h-[250px] md:h-[500px] m-auto">
											<img
												src={`http://backend.publicaffairsnepal.com/${
													eventsData &&
													eventsData.image &&
													eventsData.image.split("8000/")[1]
												}`}
												alt="Louvre"
												className="object-cover w-full h-full"
											/>
										</dd>
									</div>
									<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-500">
											Campaign name
										</dt>
										<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
											{eventsData && eventsData.title}
										</dd>
									</div>
									<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-500">
											Description of event
										</dt>
										<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
											{eventsData && eventsData.description}
										</dd>
									</div>
									<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-500">
											Location
										</dt>
										<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
											{eventsData && eventsData.location}
										</dd>
									</div>
									<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-500">Date</dt>
										<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
											{moment(eventsData && eventsData.date).format(
												"MMMM Do YYYY"
											)}
										</dd>
									</div>
									<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-500">Time</dt>
										<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
											{eventsData && eventsData.time}
										</dd>
									</div>
									<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-500">
											agenda
										</dt>
										<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
											<a href="www.facebook.com" target="_blank">
												{eventsData && eventsData.agenda}
											</a>
										</dd>
									</div>
									<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-500">Links</dt>
										<dd className="mt-1 text-sm text-blue-500 underline sm:mt-0 sm:col-span-2 ">
											<a
												href={eventsData && eventsData.link}
												target="_blank"
												rel="noreferrer"
											>
												{eventsData && eventsData.link}
											</a>
										</dd>
									</div>
								</dl>
							</div>
						</div>
						// ))
					)}
				</div>
				<EventUpdate
					title="Update Events"
					closeModal={closeUpdateModal}
					isOpen={openUpdate}
					eventDetail={eventDetail}
				/>
				<Even title="Add Events" closeModal={closeModal} isOpen={isOpen} />
			</div>
		</>
	);
};

export default Events;
