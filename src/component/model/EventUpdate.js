import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { updateEvent } from "../../actions/EventAction";

const EventUpdate = ({ title, closeModal, isOpen, eventDetail }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState();
	const [agenda, setAgenda] = useState();
	const [loc, setLoc] = useState();
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [link, setLink] = useState();
	const [des, setDes] = useState();
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		if (eventDetail) {
			setName(eventDetail.title);
			setAgenda(eventDetail.description);
			setLoc(eventDetail.location);
			setDate(eventDetail.date);
			setTime(eventDetail.time);
			setLink(eventDetail.link);
			setLink(eventDetail.link);
			setDes(eventDetail.agenda);
		}
	}, [eventDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			updateEvent(
				eventDetail.id,
				name,
				agenda,
				des,
				loc,
				date,
				time,
				link,
				userId
			)
		);
	};

	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						<label className="block text-sm font-medium text-gray-700">
							Campaign Name
						</label>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							onChange={(e) => setName(e.target.value)}
							id="name"
							defaultValue={name}
							placeholder="Set Name"
							type="text"
						/>
					</div>

					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Description
						</label>
						<textarea
							className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
							onChange={(e) => setAgenda(e.target.value)}
							id="name"
							rows={5}
							defaultValue={agenda}
							placeholder="Agenda"
						/>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Location
						</label>
						<input
							type="text"
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							onChange={(e) => setLoc(e.target.value)}
							id="location"
							defaultValue={loc}
							placeholder="Location"
						/>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Agenda
						</label>
						<input
							type="text"
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							onChange={(e) => setDes(e.target.value)}
							id="location"
							defaultValue={des}
							placeholder="Location"
						/>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Date
						</label>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							onChange={(e) => setDate(e.target.value)}
							type="date"
							id="date"
							defaultValue={date}
							placeholder="date"
						/>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Time
						</label>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							onChange={(e) => setTime(e.target.value)}
							id="time"
							type="time"
							defaultValue={time}
							placeholder="time"
						/>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Link
						</label>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							onChange={(e) => setLink(e.target.value)}
							id="link"
							defaultValue={link}
							placeholder="Links"
							type="url"
						/>
					</div>
					<br />
					<button
						type="submit"
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClose={closeModal}
						// onClick={refreshPage}
					>
						Update
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default EventUpdate;
