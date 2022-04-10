import React, { useEffect, useState } from "react";
import Modelwrapper from "./modelwrapper";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addManifesto } from "../../actions/PersonalAction";
import { MANIFESTO_ADD_RESET } from "../../constants/PersonalConstants";

const PersonalProfile = ({ title, closeModal, isOpen }) => {
	const dispatch = useDispatch();
	const manifestoAdd = useSelector((state) => state.manifestoAdd);
	const { success: successAdd, iserror } = manifestoAdd;

	const [file, setFile] = useState();
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	// const [previewSource, setPreviewSource] = useState();

	// const previewFile = (file) => {
	// 	console.log(file);
	// 	const reader = new FileReader();
	// 	if (file) {
	// 		reader.readAsDataURL(file);
	// 	}
	// 	reader.onloadend = () => {
	// 		setPreviewSource(reader.result);
	// 	};
	// };

	

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addManifesto(file, userId));
	};
	useEffect(() => {
		if (successAdd) {
			dispatch({ type: MANIFESTO_ADD_RESET });
		}
		if (iserror) {
			dispatch({ type: MANIFESTO_ADD_RESET });
		}
	}, [successAdd, iserror]);

	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						upload your Manifesto
					</label>
					<input
						onChange={(e) => setFile(e.target.files[0])}
						// onChange={(e) => (
						// 	setFile(e.target.files[0]), previewFile(e.target.files[0])
						// )}
						accept="application/pdf,.docx,"
						id="file"
						type="file"
						required
						className="block w-full mt-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
					/>
				</div>
				{/* {previewSource && (
					<div className="w-full h-[260px]">
						<img
							src={previewSource}
							className="w-full h-full object-fit profile-img"
							alt="profile"
						/>
					</div>
				)} */}
				<div className="mt-5 ">
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						submit
					</button>
				</div>
			</form>
		</Modelwrapper>
	);
};

export default PersonalProfile;
