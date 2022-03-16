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
	const [image, setImage] = useState();
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
			setImage(eventDetail.image);
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
				image,
				userId
			)
		);
	};

	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-4">
						<label className="block text-sm font-medium text-gray-700">
							Photo
						</label>
						<input
							onChange={(e) => setImage(e.target.files[0])}
							accept="image/png, image/jpg, image/jpeg"
							id="poto"
							type="file"
							className="block w-full px-2 py-1 mt-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
						/>
					</div>
					<div className="mt-2 ">
						<label className="block text-sm font-medium text-gray-700">
							Campaign Name
						</label>
						<input
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
							className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
						className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
