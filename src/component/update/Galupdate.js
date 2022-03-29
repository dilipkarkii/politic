import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateGallary } from "../../actions/GallaryAction";

const GalUpdate = ({ title, closeModal, isOpen, gallaryDetail }) => {
	const [des, setDes] = useState("");

	const [pic, setPic] = useState();
	console.log("gallaryDetail", gallaryDetail);
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;
	// useEffect(() => {
	// 	if (gallaryDetail) {
	// 		setDes(gallaryDetail.description);
	// 		setPic(gallaryDetail.image);
	// 	}
	// }, [gallaryDetail]);

	// let formData = new FormData();
	// formData.append("image", pic);
	// formData.append("description", des);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	console.log(des, pic);
	// 	let config = {
	// 		headers: {
	// 			"Content-Type": "multipart/form-data",
	// 		},
	// 	};
	// 	const formData = new FormData();
	// 	formData.append("description", des);
	// 	formData.append("image", pic);
	// 	formData.append("owner", userId);
	// 	const { data } = await axios.put(
	// 		`http://backend.publicaffairsnepal.com/gallery/${gallaryDetail.id}/`,
	// 		formData,
	// 		config
	// 	);
	// 	if (data) {
	// 		window.location.reload(true);
	// 	}
	// };

	const dispatch = useDispatch();
	useEffect(() => {
		if (gallaryDetail) {
			setDes(gallaryDetail.description);
			setPic(gallaryDetail.image);
		}
	}, [gallaryDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(updateGallary(gallaryDetail.id, pic, des, userId));
	};

	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-2">
					<label> Description</label>
					<textarea
						className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						onChange={(e) => setDes(e.target.value)}
						id="name"
						value={des}
						placeholder="Set Description"
						type="text"
					/>
				</div>

				<div className="mt-4">
					<label> Image:</label>
					<input
						onChange={(e) => setPic(e.target.files[0])}
						id="name"
						className="px-1 block w-full border mt-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						type="file"
						multiple
					/>
					<br />
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClose={closeModal}
					>
						submit
					</button>
				</div>
			</form>
		</Modelwrapper>
	);
};

export default GalUpdate;
