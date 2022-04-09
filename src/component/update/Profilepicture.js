import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import { useDispatch, useSelector } from "react-redux";
import { updatePhoto } from "../../actions/PersonalAction";
import { PROFILEPHOTO_UPDATE_RESET } from "../../constants/PersonalConstants";

const Profilephoto = ({ title, closeModal, isOpen }) => {
	const [pic, setPic] = useState();

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	const profilephotoUpdate = useSelector((state) => state.profilephotoUpdate);
	const { success: successAdd } = profilephotoUpdate;

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: PROFILEPHOTO_UPDATE_RESET });
			setPreviewSource("");
		}
	}, [successAdd]);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(updatePhoto(pic, userId));
	};

	const [previewSource, setPreviewSource] = useState();

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

	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label> Update profile Photo:</label>
					<input
						// onChange={(e) => setPic(e.target.files[0])}
						onChange={(e) => (
							setPic(e.target.files[0]), previewFile(e.target.files[0])
						)}
						id="name"
						className="block w-full px-1 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						type="file"
					/>{" "}
					{previewSource && (
						<div className="w-full h-[260px] mt-3">
							<img
								src={previewSource}
								className="w-full h-full object-fit profile-img"
								alt="profile"
							/>
						</div>
					)}
					<br />
					<button
						type="submit"
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

export default Profilephoto;
