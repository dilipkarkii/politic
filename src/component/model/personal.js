import React, { useEffect, useState } from "react";
import Modelwrapper from "./modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addAchivement } from "../../actions/AchivementAction";
import { ACHIVEMENT_ADD_RESET } from "../../constants/AchivementConstants";

const Personal = ({ title, closeModal, isOpen }) => {
	const dispatch = useDispatch();
	const achivementAdd = useSelector((state) => state.AchivementAdd);
	const { success: successAdd } = achivementAdd;

	const [achiv, setAchiv] = useState("");
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addAchivement(achiv, userId));
	};
	useEffect(() => {
		if (successAdd) {
			dispatch({ type: ACHIVEMENT_ADD_RESET });
			setAchiv("");
		}
	}, [successAdd]);

	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						Achivements
						<textarea
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							onChange={(e) => setAchiv(e.target.value)}
							id="name"
							value={achiv}
							placeholder="Enter Achivements"
							type="text"
							required
						/>
					</div>
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClose={closeModal}
					>
						Submit
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default Personal;
