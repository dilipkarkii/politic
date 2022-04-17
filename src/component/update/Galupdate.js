import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateGallary } from "../../actions/GallaryAction";
import { GALLARY_UPDATE_RESET } from "../../constants/GallaryConstants";

const GalUpdate = ({ title, closeModal, isOpen, gallaryDetail }) => {
	const [des, setDes] = useState("");

	const [pic, setPic] = useState();
	console.log("gallaryDetail", gallaryDetail);
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;
	const [message, setMessage] = useState("");
	const [previewSource, setPreviewSource] = useState();
	const [previewImage, setPreviewImage] = useState();

	const gallaryUpdate = useSelector((state) => state.gallaryUpdate);
	const { success: successAdd } = gallaryUpdate;

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: GALLARY_UPDATE_RESET });
			setPreviewSource("");
		}
		// if (isOpen === true) {
		//   setPreviewImage("");
		//   setPreviewSource("");
		// }
	}, [successAdd, isOpen]);

	const previewFile = (file) => {
		console.log(file);
		const reader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
		}
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	const dispatch = useDispatch();
	useEffect(() => {
		setTimeout(() => setMessage(""), 3000);
		if (gallaryDetail) {
			setDes(gallaryDetail.description);
			setPic(gallaryDetail.image);
			setPreviewImage(gallaryDetail.image);
		}
	}, [gallaryDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (des.length > 100) {
			setMessage("Please Enter less than 100 character");
		} else {
			setTimeout(() => setMessage(""), 3000);
			dispatch(updateGallary(gallaryDetail.id, pic, des, userId));
		}
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
					<span className="text-red-700">{message}</span>
				</div>

				<div className="mt-4">
					<label> Image:</label>
					<input
						onChange={(e) => (
							setPic(e.target.files[0]), previewFile(e.target.files[0])
						)}
						id="name"
						className="block w-full px-1 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						type="file"
						multiple
						required
					/>
				</div>

				{previewSource ? (
					<div className="w-full h-[260px] mt-3">
						<img
							src={previewSource}
							className="w-full h-full object-fit profile-img"
							alt="profile"
						/>
					</div>
				) : (
					<img
						src={`http://backend.publicaffairsnepal.com/${
							previewImage && previewImage.split("8000/")[1]
						}`}
						className="w-full h-full object-fit profile-img"
						alt="profile"
					/>
				)}

				<br />
				<button
					type="submit"
					// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
					className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					onClose={closeModal}
				>
					submit
				</button>
			</form>
		</Modelwrapper>
	);
};

export default GalUpdate;

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
