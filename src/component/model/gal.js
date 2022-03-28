import React, { useEffect, useState } from "react";
import Modelwrapper from "./modelwrapper";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addGallary } from "../../actions/GallaryAction";
import { GALLARY_ADD_RESET } from "../../constants/GallaryConstants";

const Gal = ({ title, closeModal, isOpen }) => {
	// const url = "http://44.199.61.81:8080/gallery/";
	const dispatch = useDispatch();
	const gallaryAdd = useSelector((state) => state.gallaryAdd);
	const { success: successAdd } = gallaryAdd;

	const [pic, setPic] = useState();
	const [des, setDes] = useState("");
	// const [pid, setPid] = useState();
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	// let formData = new FormData();
	// formData.append("image", pic);
	// formData.append("description", des);
	// formData.append("owner", userId);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	console.log(des, pic);
	// 	let config = {
	// 		headers: {
	// 			"Content-Type": "multipart/form-data",
	// 		},
	// 	};
	// 	const { data } = await axios.post(url, formData, config);
	// 	if (data) {
	// 		window.location.reload(true);
	// 	}
	// };
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addGallary(pic, des, userId));
	};

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: GALLARY_ADD_RESET });
			setDes("");
			setPic("");
		}
	}, [successAdd]);
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-2">
					<label className="block text-sm font-medium text-gray-700">
						Description
					</label>
					<textarea
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						onChange={(e) => setDes(e.target.value)}
						id="des"
						value={des}
						placeholder="Set description"
						type="text"
						required
						minLength={10}
					/>
				</div>

				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Image
					</label>
					<input
						onChange={(e) => setPic(e.target.files[0])}
						id="img"
						className="block w-full px-1 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
						// value={pic}
						placeholder="name"
						type="file"
						multiple
						required
					/>

					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClose={closeModal}
					>
						Submit
					</button>
				</div>
			</form>
		</Modelwrapper>
	);
};

export default Gal;
