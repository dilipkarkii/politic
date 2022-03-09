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
		// updateEvent({
		// 	id: eventDetail.id,
		// 	title: name,
		// 	description: agenda,
		// 	location: loc,
		// 	date,
		// 	time,
		// 	link,
		// 	agenda: des,
		// 	organized_by: userId,
		// });
		// console.log(name, agenda, loc, date, time, link);
	};
	// useEffect(() => {
	// 	if (isSuccess) {
	// 		window.location.reload(true);
	// 	}
	// }, [isSuccess]);

	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						<label>campaign Name</label>
						<input
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setName(e.target.value)}
							id="name"
							defaultValue={name}
							placeholder="Set Name"
							type="text"
						/>
					</div>

					<div className="mt-4">
						<label>Description</label>
						<textarea
							className="w-full h-40 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setAgenda(e.target.value)}
							id="name"
							defaultValue={agenda}
							placeholder="Agenda"
						/>
					</div>
					<div className="mt-4">
						<label>location</label>
						<input
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setLoc(e.target.value)}
							id="location"
							defaultValue={loc}
							placeholder="Location"
						/>
					</div>
					<div className="mt-4">
						<label>agenda</label>
						<input
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setDes(e.target.value)}
							id="location"
							defaultValue={des}
							placeholder="Location"
						/>
					</div>
					<div className="mt-4">
						<label>Date</label>
						<input
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setDate(e.target.value)}
							type="date"
							id="date"
							defaultValue={date}
							placeholder="date"
						/>
					</div>
					<div className="mt-4">
						<label>Time</label>
						<input
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setTime(e.target.value)}
							id="time"
							type="time"
							defaultValue={time}
							placeholder="time"
						/>
					</div>
					<div className="mt-4">
						<label>link</label>
						<input
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
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
						className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
